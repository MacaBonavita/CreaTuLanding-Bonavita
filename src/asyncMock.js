const products = [
    {
        id: '1',
        name: 'Peugeot 308',
        price: 1000
        category: 'Autos',
        img: ''
        Stock: 1,
        descripcion: 'descripcion de peugeot 308'
    },
    {id: '2', name: 'Amarok 2018', price: 800, category:'Camionetas' img: "", stock: 1, descripcion:''}
    {id: "3", name: 'Ford Fiesta 2015', price: 1200, category: 'Autos', img:'', stock: 1, descripcion:''}
]

export const getProducts = () => {
    return new promise((resolve) => {
        setTimeout (() => {
            resolve(products)
        }, 500)
    })
}