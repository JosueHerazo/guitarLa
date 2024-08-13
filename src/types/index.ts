export type Guitar = {
    id: number
    name: string
    image: string
    description: string
    price: number
}
// herencia de un type  otro type para usar, se pueden selecionar todos solo con el nombre o con la palabra pick 
export type CartItem = Guitar &{
    quantity: number
}
// export type CartItem = Pick<Guitar, "id" | "name" | "price" > & {
//     quantity: number
// }

export type GuitarId = Guitar["id"]