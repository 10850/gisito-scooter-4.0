import { useState } from "react";
import { db, productStorage } from "../../firebase/firebase";
import "../forms/addproduct.css";

const AddWheel = () => {
    const [wheelData, setWheelData] = useState([])
    const [files, setFiles] = useState([])
    const [error, setError] = useState(null)


    const dataChange = (e) => {
        if (e.target.type === "number") {
            console.log("number")
            setWheelData({
              [e.target.name]: parseInt(e.target.value)
            }) 
        } else {
            setWheelData([...wheelData, {[e.target.name]: e.target.value}])
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
        
        db.collection("wheels").add({
            wheelData,
            files
        })
    }

    return (
        <>
            <h3>
                Tilføj Hjul
            </h3>
            <form className="product-form">
                <label>
                    Kategori
                </label>
                <input name="category" type="text" placeholder="hjul" />

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
                    Hjuldiameter
                </label>
                <input name="wheel_diameter" type="number" step="any" />

                <label>
                    Hjul nav bredde
                </label>
                <input name="wheel_width" type="number" step="any" />

                <label>
                    Hjul hårdhed
                </label>
                <input name="wheel_hardness" type="number" step="any" />

                <label>
                    Hjul pr. pakke
                </label>
                <input name="wheels_pr_pack" type="text" />

                <label>
                    Vægt
                </label>
                <input name="weight" type="number" step="any" />

                <label>
                    Kerne design
                </label>
                <input name="core_design" type="text" />
                    
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

export default AddWheel;