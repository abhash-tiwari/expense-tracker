import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const TransactionForm = ({ onAddTransaction }) => {
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    type: 'Expense',
    date: new Date()
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTransaction({
      ...formData,
      amount: Number(formData.amount)
    });
    setFormData({
      description: '',
      amount: '',
      type: 'Expense',
      date: new Date()
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6">
      <div className="mb-4">
        <input
          type="text"
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
          placeholder="Description"
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="number"
          value={formData.amount}
          onChange={(e) => setFormData({...formData, amount: e.target.value})}
          placeholder="Amount"
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <select
          value={formData.type}
          onChange={(e) => setFormData({...formData, type: e.target.value})}
          className="w-full p-2 border rounded"
        >
          <option value="Expense">Expense</option>
          <option value="Income">Income</option>
        </select>
      </div>
      <div className="mb-4">
        <DatePicker
          selected={formData.date}
          onChange={(date) => setFormData({...formData, date})}
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;