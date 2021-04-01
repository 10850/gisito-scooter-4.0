import "../forms/addproduct.css";

const AddWheel = () => {
    return (
        <>
            <h3>
                Tilføj Hjul
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
                    Hjuldiameter
                </label>
                <input type="number" step="any" />

                <label>
                    Hjul nav bredde
                </label>
                <input type="number" step="any" />

                <label>
                    Hjul hårdhed
                </label>
                <input type="number" step="any" />

                <label>
                    Hjul pr. pakke
                </label>
                <input type="text" />

                <label>
                    Vægt
                </label>
                <input type="number" step="any" />

                <label>
                    Kerne design
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

export default AddWheel;