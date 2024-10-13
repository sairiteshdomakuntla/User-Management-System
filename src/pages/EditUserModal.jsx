import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';

const EditUserModal = () => {
  const editingUser = useSelector(state => state.users.editingUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: editingUser,
  });
  const [selectedImage, setSelectedImage] = useState(null); // State for holding the selected image

  const onSubmit = (data) => {
    // Combine the image URL with the user data
    const updatedUserData = { ...data, image: selectedImage || editingUser.image }; // Use existing image if no new image is selected
    dispatch(updateUser(updatedUserData));
    navigate('/users');
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // Create a URL for the image file
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Edit User</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register('name', { required: true })}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Name"
          />
          <input
            {...register('email', { required: true })}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Email"
          />
          <input
            {...register('mobile', { required: true })}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Mobile"
          />
          <input
            {...register('address', { required: true })}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Address"
          />
          <input
            {...register('dob', { required: true })}
            type="date"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <select
            {...register('role', { required: true })}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Editor">Editor</option>
            <option value="Viewer">Viewer</option>
          </select>
          <div className="flex space-x-4">
            <label className="text-gray-700">
              <input {...register('gender')} type="radio" value="Male" className="mr-2" />
              Male
            </label>
            <label className="text-gray-700">
              <input {...register('gender')} type="radio" value="Female" className="mr-2" />
              Female
            </label>
          </div>

          {/* Image input field */}
          <input 
            type="file" 
            accept="image/*" // Accepts image files only
            onChange={handleImageChange} 
            className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          {selectedImage && (
            <div className="mt-4">
              <h3 className="text-gray-700">Image Preview:</h3>
              <img 
                src={selectedImage} 
                alt="Selected" 
                className="mt-2 h-32 w-auto border border-gray-300" 
              />
            </div>
          )}

          <button type="submit" className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default EditUserModal;
