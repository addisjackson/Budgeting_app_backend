
const commoditiesToBuy = require('../models/commodities.model'); // Assuming the data file is named commoditiesData.js
// Get all commodities
const getAllCommodities = () => {
    return commoditiesToBuy;
  };
  
  // Get commodity by ID
  const getCommodityById = (transactionId) => {
    return commoditiesToBuy.find(commodity => commodity.transaction_id === transactionId);
  };
  
 
  
  // Get commodity by name
  const getCommodityByPurchase = (purchase) => {
    return commoditiesToBuy.find(commodity => commodity.purchase === purchase);
  };
  
    // Get commodity by name
    const getCommodityByStore = (store) => {
      return commoditiesToBuy.find(commodity => commodity.store === store);
    };
    
  // Create a new commodity
  const createCommodity = (newCommodity) => {
    // Assign a new commodity ID (replace this logic with your actual ID assignment)
    const newCommodityId = commoditiesToBuy.length + 1;
    newCommodity.transaction_id = newCommodityId;
  
    // Add the new commodity to the existing array
    commoditiesToBuy.push(newCommodity);
  
    return newCommodity;
  };
  
  // Update commodity by ID
  const updateCommodity = (transactionId, updatedCommodity) => {
    const index = commoditiesToBuy.findIndex(commodity => commodity.transaction_id === transactionId);
  
    if (index !== -1) {
      // Update the existing commodity with the new details
      commoditiesToBuy[index] = { ...commoditiesToBuy[index], ...updatedCommodity };
  
      return {
        success: true,
        updatedCommodity: commoditiesToBuy[index],
      };
    } else {
      return { success: false };
    }
  };
  
  // Delete commodity by ID
  const deleteCommodity = (transactionId) => {
    const index = commoditiesToBuy.findIndex(commodity => commodity.transaction_id === transactionId);
  
    if (index !== -1) {
      // Remove the com modity from the array
      commoditiesToBuy.splice(index, 1);
  
      return { success: true };
    } else {
      return { success: false };
    }
  };
  
  const getAllSortedCommodities = (sortOrder = 'asc') => {
    let sortedCommodities;
  
    // Check the sorting order and sort the commodities array accordingly
    if (sortOrder === 'asc') {
      sortedCommodities = [...commoditiesToBuy].sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
      sortedCommodities = [...commoditiesToBuy].sort((a, b) => b.price - a.price);
    } else {
      // Default to ascending order if sortOrder is neither 'asc' nor 'desc'
      sortedCommodities = [...commoditiesToBuy].sort((a, b) => a.price - b.price);
    }
  
    return sortedCommodities;
  };
  
  module.exports = {
    getAllCommodities,
    getAllSortedCommodities,
    getCommodityById,
    getCommodityByPurchase,
    getCommodityByStore,
    createCommodity,
    updateCommodity,
    deleteCommodity,
  };