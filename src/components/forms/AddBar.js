import { useState } from "react";
import { db, productStorage } from "../../firebase/firebase";
import "../forms/addproduct.css";

const AddBar = () => {
    const [barData, setBarData] = useState([])
    const [files, setFiles] = useState([])
    const [error, setError] = useState(null)


    const dataChange = (e) => {
        if (e.target.type === "number") {
            console.log("number")
            setBarData({
              [e.target.name]: parseInt(e.target.value)
            }) 
        } else {
            setBarData([...barData, {[e.target.name]: e.target.value}])
        }
    }

    const handleFile = (event) => {
        const target = event.target;
        const value = target.files[0];
        const name = target.name;

        console.log(value);

        const storageRef = productStorage.ref(value.name);

        storageRef.put(value).on('state_changed', (snap) => {
            console.log(snap)
        }, (err) => {
            console.log(err)
        }, async () => {
            const url = await storageRef.getDownloadURL();
            console.log(url)
            setFiles([...files, {[name]: url}])
            console.log(files)
        });
    }


    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        db.collection("bars").add({
            barData,
            files
        })
    }

    return (
        <>
            <h3>
                Tilføj Bar
            </h3>
            <form className="product-form">
                <label>
                    Kategori
                </label>
                <input name="category" type="text" placeholder="bars" />

                <label>
                    Brand logo
                </label>
                <input name="brand" type="file" />

                <label>
                    Produktnavn
                </label>
                <input name="product_name" type="text" />

                <label>
                    Pris
                </label>
                <input name="price" type="number" step="any" />

                <label>
                    Produktbilled
                </label>
                <input name="product_img" type="file" />

                <label>
                    Beskrivelse
                </label>
                <textarea name="description" className="description">

                </textarea>

                <label>
                    Tech features
                </label>
                <textarea name="tech_feature" className="tech-feature">
                    
                </textarea>

                <label>
                    Bar bredde
                </label>
                <input name="bar_width" type="number" step="any" />

                <label>
                    Bar højde
                </label>
                <input name="bar_height" type="number" step="any" />

                <label>
                    Kompatibel med
                </label>
                <input name="compatibility" type="text" />

                <label>
                    Bar materiale
                </label>
                <input name="bar_material" type="text" />

                <label>
                    Vægt
                </label>
                <input name="weight" type="number" step="any" />
                    
                <label>
                    Bar ydre diameter
                </label>
                <input name="bar_outer_diameter" type="number" step="any" />

                <label>
                    Bar indre diameter
                </label>
                <input name="bar_inner_diameter" type="number" step="any" />

                <label>
                    Bar Form
                </label>
                <input name="bar_form" type="text" />

                <label>
                    SCS Ready?
                </label>
                <input name="scs_ready" type="text" />

                <button>
                    Tilføj
                </button>
            </form>
        </> 
    )
}

export default AddBar;