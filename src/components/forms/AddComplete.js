import { useState } from "react";
import { db, productStorage } from "../../firebase/firebase";
import "../forms/addproduct.css";

const AddComplete = () => {
    const [completeData, setCompleteData] = useState([])
    const [files, setFiles] = useState([])
    const [error, setError] = useState(null)


    const dataChange = (e) => {
        if (e.target.type === "number") {
            console.log("number")
            setCompleteData({
              [e.target.name]: parseInt(e.target.value)
            }) 
        } else {
            setCompleteData([...completeData, {[e.target.name]: e.target.value}])
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
        
        db.collection("completes").add({
            completeData,
            files
        })
    }

    return (
        <>
            <h3>
                Tilføj Komplet Løbehjul
            </h3>
            <form className="product-form">
                <label>
                    Kategori
                </label>
                <input name="category" type="text" placeholder="komplette" />

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
                    Total højde
                </label>
                <input name="total_height" type="number" step="any" />

                <label>
                    Compression system
                </label>
                <input name="compression_system" type="text" />

                <label>
                    Vægt
                </label>
                <input name="weight" type="number" step="any" />

                <label>
                    Deck længde
                </label>
                <input name="deck_length" type="number" step="any" />

                <label>
                    Deck bredde
                </label>
                <input name="deck_width" type="number" step="any" />

                <label>
                    Bar højde
                </label>
                <input name="bar_height" type="number" step="any" />

                <label>
                    Bar bredde
                </label>
                <input name="bar_width" type="number" step="any" />

                <label>
                    Bar ydre diameter
                </label>
                <input name="bar_outer_diameter" type="number" step="any" />

                <label>
                    Bar indre diameter
                </label>
                <input name="bar_inner_diameter" type="number" step="any" />

                <label>
                    Hjuldiameter
                </label>
                <input name="wheel_diameter" type="number" step="any" />

                <label>
                    Hjul nav bredde
                </label>
                <input name="wheel_nav_width" type="number" step="any" />

                <label>
                    Headtube vinkel
                </label>
                <input name="headtube_angle" type="number" step="any" />

                <label>
                    Bar materiale
                </label>
                <input name="bar_material" type="text" />

                <label>
                    Bar form
                </label>
                <input name="bar_form" type="text" />

                <label>
                    Dropout form
                </label>
                <input name="dropout_form" type="text" />
                    
                <label>
                    Aksel diameter
                </label>
                <input name="aksel" type="number" step="any" />

                <label>
                    Kuglelejer
                </label>
                <input name="bearings" type="text" />

                <button>
                    Tilføj
                </button>
            </form>
        </> 
    )
}

export default AddComplete;