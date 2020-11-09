let query = window.location.search
let searchParams = new URLSearchParams(query)
let name = searchParams.get("name")
console.log(name)