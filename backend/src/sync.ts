import { db } from "."
import { cat_data } from "./data";

const fetchCategories = async  () => {
	let cats = await db.category.findMany();
	console.log(cats)
}


const updateCategories  = async ()  => {
	cat_data.forEach(async e => {
		let res = await db.category.create({
			data :  e
		})
	})	
}


updateCategories()