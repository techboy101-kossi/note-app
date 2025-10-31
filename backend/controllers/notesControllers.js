import Notes from "../models/notesModel.js";

export const notesControllers = {
  createNote: async (req, res) => {
    try {
      const { title, subtitle, content } = req.body;
      if (!title || !subtitle || !content) {
        return res.status(400).json({ msg: "please fill in all fields" });
      }
      const newNote = await Notes({
        title,
        subtitle,
        content,
      });
      await newNote.save();
      return res
        .status(201)
        .json({ msg: "new Note added successfully", data: newNote });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  getNotes: async (req, res) => {
    try {
      const notes = await Notes.find();
      return res.status(200).json({ msg: "All notes", data: notes });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  getNotesById: async (req, res) => {
    try {
      const noteId = req.params.noteId;
      const note = await Notes.findById(noteId);
      return res.status(200).json({ msg: "Single note by Id", data: note });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  deleteNote: async (req, res) => {
    try {
      const noteId = req.params.noteId;
      const note = await Notes.findByIdAndDelete(noteId);
      return res
        .status(200)
        .json({ msg: "Note deleted successfully", data: note });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};
