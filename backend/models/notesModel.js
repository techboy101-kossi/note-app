import mongoose from 'mongoose';

const NotesSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			trim: true,
		},
		subtitle: {
			type: String,
			trim: true,
		},
		content: {
			type: String,
			required: true,
			trim: true,
		},
	},
	{ timestamps: true },
);

const Notes = mongoose.model('Notes', NotesSchema);
export default Notes;
