import "../forms/addproduct.css";

const AddComplete = () => {
    return (
        <>
            <h3>
                Tilføj Komplet Løbehjul
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
                    Total højde
                </label>
                <input type="number" step="any" />

                <label>
                    Compression system
                </label>
                <input type="text" />

                <label>
                    Vægt
                </label>
                <input type="number" step="any" />

                <label>
                    Deck længde
                </label>
                <input type="number" step="any" />

                <label>
                    Deck bredde
                </label>
                <input type="number" step="any" />

                <label>
                    Bar højde
                </label>
                <input type="number" step="any" />

                <label>
                    Bar bredde
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
                    Hjuldiameter
                </label>
                <input type="number" step="any" />

                <label>
                    Hjul nav bredde
                </label>
                <input type="number" step="any" />

                <label>
                    Headtube vinkel
                </label>
                <input type="number" step="any" />

                <label>
                    Bar materiale
                </label>
                <input type="text" />

                <label>
                    Bar form
                </label>
                <input type="text" />

                <label>
                    Dropout form
                </label>
                <input type="text" />
                    
                <label>
                    Aksel diameter
                </label>
                <input type="number" step="any" />

                <label>
                    Kuglelejer
                </label>
                <input type="text" />

                <button>
                    Tilføj
                </button>
            </form>
        </> 
    )
}

export default AddComplete;