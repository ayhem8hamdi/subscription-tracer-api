import mongoose from "mongoose";

const SubscriptionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        index: true,
        required: true
    },
    name: {
        type: String,
        required: [true, "Subscription name is required"],
        trim: true,
        minlength: 2,
        maxlength: 100
    },
    price: {
        type: Number,
        required: [true, "Subscription price is required"],
        min: [0, "Price must be greater than zero"]
    },
    currency: {
        type: String,
        enum: ['USD', 'EUR', 'GBP'],
        default: 'USD'
    },
    frequency: {
        type: String,
        enum: ['Yearly', 'Monthly', 'Daily', 'Weekly'],
        required: true
    },
    paymentMethod: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        enum: ['Active', 'Canceled', 'Expired'],
        default: 'Active'
    },
    startDate: {
        type: Date,
        required: true,
        validate: {
            validator: v => v <= Date.now(),
            message: "Start date must be in the past"
        }
    },
    renewalDate: {
        type: Date,
        validate: {
            validator: function(v) { return v >= this.startDate; },
            message: "Renewal date must be after the start date"
        }
    }
}, { timestamps: true });
SubscriptionSchema.pre("save", function (next) {
        const renewalFrequency = {
        Daily: 1,
        Weekly: 7,
        Monthly: 30,
        Yearly: 365
    };
    if (!this.renewalDate) {
        const days = renewalFrequency[this.frequency];
        const newDate = new Date(this.startDate);
        newDate.setDate(newDate.getDate() + days);
        this.renewalDate = newDate;
    }

    if (this.renewalDate < Date.now()) {
        this.status = "Expired";
    }

    next();
});

export default mongoose.model("Subscription", SubscriptionSchema);
