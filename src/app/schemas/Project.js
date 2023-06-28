import mongoose from '@/database';
import Slugfy from '../../utils/Slugfy';

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    slug: {
        type: String,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    priority: {
        type: Number,
        required: true,
    },
    deadline: {
        type: String,
        required: true,
    },
    featuredImage: {
        type: String,
        required: false,
    },
    images: [{
        type: String,
    }, ],
    category: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

});

ProjectSchema.pre("save", function(next) {
    const title = this.title;
    this.slug = Slugfy(title);
    next();
})

export default mongoose.model('Project', ProjectSchema);