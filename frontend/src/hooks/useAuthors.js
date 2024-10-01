import { useState, useEffect } from 'react';
import axios from 'axios';

function useAuthors() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetchAuthors();
  }, []);

  const fetchAuthors = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/tac_gia');
      setAuthors(response.data);
    } catch (error) {
      console.error('Error fetching authors:', error);
    }
  };

  const addAuthor = async (authorData) => {
    try {
      await axios.post('http://127.0.0.1:8000/api/tac_gia', authorData);
      fetchAuthors();
    } catch (error) {
      console.error('Error adding author:', error);
    }
  };

  const editAuthor = async (id, authorData) => {
    try {
      await axios.put(`http://127.0.0.1:8000/api/tac_gia/${id}`, authorData);
      fetchAuthors();
    } catch (error) {
      console.error('Error editing author:', error);
    }
  };

  const deleteAuthor = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/tac_gia/${id}`);
      fetchAuthors();
    } catch (error) {
      console.error('Error deleting author:', error);
    }
  };

  return { authors, addAuthor, editAuthor, deleteAuthor };
}

export default useAuthors;