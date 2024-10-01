import { useState, useEffect } from 'react';
import axios from 'axios';

function usePublishers() {
  const [publishers, setPublishers] = useState([]);

  useEffect(() => {
    fetchPublishers();
  }, []);

  const fetchPublishers = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/nha_xuat_ban');
      setPublishers(response.data);
    } catch (error) {
      console.error('Error fetching publishers:', error);
    }
  };

  const addPublisher = async (publisherData) => {
    try {
      await axios.post('http://127.0.0.1:8000/api/nha_xuat_ban', publisherData);
      fetchPublishers();
    } catch (error) {
      console.error('Error adding publisher:', error);
    }
  };

  const editPublisher = async (id, publisherData) => {
    try {
      await axios.put(`http://127.0.0.1:8000/api/nha_xuat_ban/${id}`, publisherData);
      fetchPublishers();
    } catch (error) {
      console.error('Error editing publisher:', error);
    }
  };

  const deletePublisher = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/nha_xuat_ban/${id}`);
      fetchPublishers();
    } catch (error) {
      console.error('Error deleting publisher:', error);
    }
  };

  return { publishers, addPublisher, editPublisher, deletePublisher };
}

export default usePublishers;