const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('DB Connected');
    } catch (e) {
        console.error('Database connection error:', e);
    }
};

connectDB();
