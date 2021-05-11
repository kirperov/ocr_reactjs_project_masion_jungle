import { plantList } from '../datas/plantList';

function ShoppingList() {
    const categories = plantList.reduce((previous, currentPlant) => 
    previous.includes(currentPlant.category) ? previous : previous.concat(currentPlant.category), []);

    return (
        <div>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>

            <ul>
                {plantList.map((plant) => (
                    <li key={plant.id}>{ plant.name }{ plant.isBestSale && plant.category === "classique" && <span>🔥</span> }</li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList