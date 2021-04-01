import "../forms/addproduct.css";

const AddBar = () => {
    return (
        <>
            <h3>
                Tilføj Bar
            </h3>
            <form className="product-form">
                <label>
                    Kategori
                </label>
                <input type="text" placeholder="bars" />

                <label>
                    Brand logo
                </label>
                <input type="file" />

                <label>
                    Produktnavn
                </label>
                <input type="text" />

                <label>
                    Pris
                </label>
                <input type="number" step="any" />

                <label>
                    Produktbilled
                </label>
                <input type="file" />

                <label>
                    Beskrivelse
                </label>
                <textarea className="description">

                </textarea>

                <label>
                    Tech features
                </label>
                <textarea className="tech-feature">
                    
                </textarea>

                <label>
                    Bar bredde
                </label>
                <input type="number" step="any" />

                <label>
                    Bar højde
                </label>
                <input type="number" step="any" />

                <label>
                    Kompatibel med
                </label>
                <input type="text" />

                <label>
                    Bar materiale
                </label>
                <input type="text" />

                <label>
                    Vægt
                </label>
                <input type="number" step="any" />
                    
                <label>
                    Bar ydre diameter
                </label>
                <input type="number" step="any" />

                <label>
                    Bar indre diameter
                </label>
                <input type="number" step="any" />

                <label>
                    Bar Form
                </label>
                <input type="text" />

                <label>
                    SCS Ready?
                </label>
                <input type="text" />

                <button>
                    Tilføj
                </button>
            </form>
        </> 
    )
}

export default AddBar;