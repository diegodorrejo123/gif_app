import { useState } from "react"
import { GifGrid, AddCategory } from "./components"

export const GiftExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                onNewCategory={onAddCategory}
            />
            {categories.map((category) =>
                <GifGrid
                    category={category}
                    key={category} />
            )}
        </>
    )
}
