const commoditiesToBuy = require('./commodities.model')


function updateTransactionIds(commoditiesToBuy) {
    const uniqueIds = new Set();
    const updatedCommodities = [];

    for (const commodity of commoditiesToBuy) {
        let newId = Math.max(310, commodity.transaction_id);

        while (uniqueIds.has(newId)) {
            newId++;
        }

        uniqueIds.add(newId);
        updatedCommodities.push({ ...commodity, transaction_id: newId });
    }
   
    return updatedCommodities;
}

console.log(updateTransactionIds(commoditiesToBuy))