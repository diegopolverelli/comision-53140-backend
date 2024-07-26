function allocate (salesOrders, purchaseOrders) {
    if(!Array.isArray(salesOrders)||!Array.isArray(purchaseOrders)) throw Error('Error, ambos parametros deben ser String')
    const orderedSales=salesOrders.sort((a,b)=>new Date(a.created)- new Date(b.created))
    const orderedPurchases=purchaseOrders.sort((a,b)=>new Date(a.receiving) - new Date(b.receiving))
    const allocatedOrders=[]
    let totalQuantityInStock=0;
    while (orderedSales.length>0&&orderedPurchases.length>0){
        let currentPurchase=orderedPurchases.shift();
        totalQuantityInStock+=currentPurchase.quantity;
        while(totalQuantityInStock>=orderedSales[0].quantity)
        {
            const salesOrder=orderedSales.shift();
            allocatedOrders.push({
                id:salesOrder.id,
                date:currentPurchase.receiving
            })
            totalQuantityInStock-=salesOrder.quantity
            if(orderedSales.length===0) break;
        }
    }
    return allocatedOrders
}

let salesOrders=[
    {
        id:1,
        quantity:1,
        created: new Date(2023,4,10)
    },
    {
        id:2,
        quantity:1,
        created: new Date(2023,3,8)
    },
    {
        id:3,
        quantity:1,
        created: new Date(2023,4,15)
    },
    {
        id:4,
        quantity:1,
        created: new Date(2023,4,12)
    },
    {
        id:5,
        quantity:1,
        created: new Date(2023,4,4)
    },
]


let purchaseOrders=[
    {
        receiving: new Date(2023,4,10).toUTCString(),
        quantity: 1
    },
    {
        receiving: new Date(2023,4,12).toUTCString(),
        quantity: 2
    },

]


console.log('Ordenes colocadas: ',allocate(salesOrders, purchaseOrders))
console.log('Ordenes no premium pendientes: ', salesOrders)
