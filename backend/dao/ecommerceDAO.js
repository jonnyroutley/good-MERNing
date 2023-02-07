// Data Access Object

let ecommerce

export default class EcommerceDAO {
  static async injectDB(conn) {
    if (ecommerce) {
      return
    }
    try {
      restaurants = await conn.db(process.env.SOMETHING).collection("products")
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in EcommerceDAO: ${e}`,
      )
    }
  }
}

static async getProducts({
  filters = null,
  page = 0,
  productsPerPage = 20,

} = {}) {
  let query
  if (filters) {
    if ("name" in filters) {
      query = { $text: { $search: filters["name"] } }
    } else if ("") {}
  }
}

let cursor 

try {
  cursor = await restaurants
    .find(query)
} catch (e) {
  console.error(`Unable to issue find command, ${e}`)
  return { restaurantsList: [], totalNumRestaurants: 0 }
}

const displayCursor = cursor.limit(productsPerPage).skip(productsPerPage * page)


