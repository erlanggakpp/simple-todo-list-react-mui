import TextField from "@mui/material/TextField";
import { useForm, Controller } from "react-hook-form";
import Button from "@mui/material/Button";

export default function NewTodo({ addTodo }) {
    const {
        control,
        handleSubmit,
        formState: { errors },
        getValues,
        reset,
    } = useForm({
        defaultValues: {
            name: "",
        },
    });
    const onSubmit = (data) => {
        addTodo(data.name);
        reset({ name: "" });
    };
    return (
        <>
            <h1>Insert Todo</h1>
            <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="name"
                    control={control}
                    rules={{
                        required: "Please fill out Todo Name",
                        minLength: { value: 2, message: "Minimum length is 2" },
                    }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            sx={{ m: "0 auto", width: 300 }}
                            id="outlined-basic"
                            label="New Todo"
                            variant="outlined"
                            placeholder="Beli makan kucing"
                            autoComplete="off"
                            helperText={errors.name && `${errors.name.message}`}
                        />
                    )}
                />
                <br />
                <Button type="submit" sx={{ m: "auto auto", maxWidth: 360 }} variant="contained">
                    Submit
                </Button>
            </form>

            <br />
        </>
    );
}
