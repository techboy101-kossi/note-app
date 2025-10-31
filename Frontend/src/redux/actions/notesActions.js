import { NOTES_TYPES } from "../types";
import * as api from "../api";

export const listNotes = () => async (dispatch) => {
  try {
    const { data } = await api.listAllNotes();

    dispatch({
      type: NOTES_TYPES.NOTES_LISTS,
      payload:data.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteNote = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "NOTE_DELETE",
      payload: id,
    });
  } catch (err) {
    console.log(err);
  }
};
