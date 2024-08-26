"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {

    const inputRef = useRef(null);

    const [image, setImage] = useState(null);

    const clickHandler = () => {
        inputRef.current.click();
    }

    const changeHandler = (event) => {
        const file = event.target.files[0];

        if (!file) {
            setImage(null);
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            setImage(fileReader.result);
        };

        fileReader.readAsDataURL(file);
    }

    return (
        <div className={classes.picker}>

            <label htmlFor={name}>{label}</label>

            <div className={classes.control}>

                <div className={classes.preview}>
                    {
                        image
                            ? <Image src={image} alt="Image uploaded by the user" fill />
                            : <p>No image uploaded yet.</p>
                    }
                </div>

                <input
                    required
                    id={name}
                    type="file"
                    name={name}
                    ref={inputRef}
                    onChange={changeHandler}
                    className={classes.input}
                    accept="image/png, image/jpeg"
                />

                <button
                    type="button"
                    onClick={clickHandler}
                    className={classes.button}
                >
                    Pick an image
                </button>

            </div>

        </div>
    )
}