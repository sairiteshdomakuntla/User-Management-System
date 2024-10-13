import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';

function NewUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [selectedImage, setSelectedImage] = useState(null); // State for holding the selected image

  const onSubmit = (data) => {
    // Combine the image URL with the user data
    const userData = { ...data, image: selectedImage };
    dispatch(addUser(userData));
    navigate('/users');
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // Create a URL for the image file
    }
  };

  return (
    <div className="p-8 bg-gray-800 min-h-screen">
      <h2 className="text-2xl font-semibold text-white mb-6">Add User</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-700 p-6 rounded-lg shadow-lg space-y-4">
        <input {...register('name', { required: 'Name is required' })} placeholder="Name" className="input w-full p-2 rounded border border-gray-300" />
        {errors.name && <p className="text-red-400">{errors.name.message}</p>}

        <input {...register('email', { required: 'Email is required' })} placeholder="Email" className="input w-full p-2 rounded border border-gray-300" />
        {errors.email && <p className="text-red-400">{errors.email.message}</p>}

        <input {...register('mobile', { required: 'Mobile number is required' })} placeholder="Mobile" className="input w-full p-2 rounded border border-gray-300" />
        {errors.mobile && <p className="text-red-400">{errors.mobile.message}</p>}

        <input {...register('address', { required: 'Address is required' })} placeholder="Address" className="input w-full p-2 rounded border border-gray-300" />
        {errors.address && <p className="text-red-400">{errors.address.message}</p>}

        <input {...register('dob', { required: 'Date of Birth is required' })} type="date" className="input w-full p-2 rounded border border-gray-300" />
        {errors.dob && <p className="text-red-400">{errors.dob.message}</p>}

        <select {...register('role', { required: 'Role is required' })} className="input w-full p-2 rounded border border-gray-300">
          <option value="">Select Role</option>
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
          <option value="Viewer">Viewer</option>
        </select>
        {errors.role && <p className="text-red-400">{errors.role.message}</p>}

        <div className="flex space-x-4">
          <label className="text-white">
            <input {...register('gender', { required: 'Gender is required' })} type="radio" value="Male" className="mr-2" />
            Male
          </label>
          <label className="text-white">
            <input {...register('gender', { required: 'Gender is required' })} type="radio" value="Female" className="mr-2" />
            Female
          </label>
        </div>
        {errors.gender && <p className="text-red-400">{errors.gender.message}</p>}

        {/* Image input field */}
        <input 
          type="file" 
          accept="image/*" // Accepts image files only
          onChange={handleImageChange} 
          className="mb-4 p-2 rounded border border-gray-300"
        />
        {selectedImage && (
          <div className="mt-4">
            <h3 className="text-white">Image Preview:</h3>
            <img 
              src={selectedImage} 
              alt="Selected" 
              className="mt-2 h-32 w-auto border border-gray-300" 
            />
          </div>
        )}

        <button type="submit" className="btn-primary w-full py-2 mt-4 bg-blue-600 text-white rounded shadow hover:bg-blue-700">Add User</button>
      </form>
    </div>
  );
}

export default NewUser;
