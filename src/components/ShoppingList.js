import { plantList } from '../datas/plantList';
import  PlantItem from './PlantItem';
import '../styles/ShoppingList.css';

function ShoppingList({ cart, updateCart }) {
    const categories = plantList.reduce((previous, currentPlant) => 
    previous.includes(currentPlant.category) ? previous : previous.concat(currentPlant.category), []);
	function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

    return (
        <div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>

            <ul className='lmj-plant-list'>
                {plantList.map(({id, cover, name, water, light, price}) => (
                    <div key={id}>
                        <PlantItem  cover={cover} name={name} water={water} light={light} />
                        <button onClick={() => addToCart(name, price)}>Ajouter</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList