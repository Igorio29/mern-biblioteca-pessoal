import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

const EditBookDialog = ({ book, open, onClose, onSave }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            titulo: book.titulo,
            subtitulo: book.subtitulo || "",
            autor: book.autor,
            genero: book.genero,
            capa: book.capa,
            link: book.link
        }
    });
    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="sm"
        >
            <form noValidate onSubmit={handleSubmit(onSave)}>
                <DialogTitle>Editar livro:{book.titulo}</DialogTitle>
                <DialogContent>

                    <TextField
                        id="outlined-basic"
                        label="Titulo"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...register("titulo", {
                            required: 'O titulo é obrigatorio',
                            minLength: { value: 3, message: 'Mínimo 3 caracteres' },
                        })}
                        error={!!errors.titulo}
                        helperText={errors?.titulo?.message}
                        disabled={isSubmitting}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Subtitulo"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...register("subtitulo", {
                            minLength: { value: 3, message: 'Mínimo 3 caracteres' },
                        })}
                        error={!!errors.subtitulo}
                        helperText={errors?.subtitulo?.message}
                        disabled={isSubmitting} />
                    <TextField
                        id="outlined-basic"
                        label="Autor"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...register("autor", {
                            required: 'O autor é obrigatorio',
                            minLength: { value: 3, message: 'Mínimo 3 caracteres' },
                        })}
                        error={!!errors.autor}
                        helperText={errors?.autor?.message}
                        disabled={isSubmitting} />
                    <TextField
                        id="outlined-basic"
                        label="Genero"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...register("genero", {
                            required: 'O genero é obrigatorio',
                            minLength: { value: 3, message: 'Mínimo 3 caracteres' },
                        })}
                        error={!!errors.genero}
                        helperText={errors?.genero?.message}
                        disabled={isSubmitting} />
                    <TextField
                        id="outlined-basic"
                        label="Imagem da capa"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...register("capa", {
                            required: 'A capa é obrigatoria',
                            pattern: {
                                value:
                                    /^(https?:\/\/.*\.(?:png|jpg|jpeg|giff|webp|bmp|tiff))$/i,
                                message: 'Url de imagem invalida'
                            },
                        })}
                        error={!!errors.capa}
                        helperText={errors?.capa?.message}
                        disabled={isSubmitting} />
                    <TextField
                        id="outlined-basic"
                        label="Link do PDF"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...register("link", {
                            required: 'O link do pdf de leitura é obrigatorio',
                            pattern: {
                                value: /^(https?:\/\/.*)$/i,
                                message: 'URL de PDF inválida',
                            },
                        })}
                        error={!!errors.link}
                        helperText={errors?.link?.message}
                        disabled={isSubmitting}
                    />
                    <DialogActions>
                        <Button onClick={onClose} disabled={isSubmitting}>Cancelar</Button>
                        <Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>

                            {isSubmitting ? 'Salvando...' : 'Salvar'}

                        </Button>
                    </DialogActions>

                </DialogContent>
            </form>
        </Dialog >
    );
}

EditBookDialog.propTypes = {
    book: PropTypes.shape({
        id: PropTypes.string.isRequired,
        titulo: PropTypes.string.isRequired,
        subtitulo: PropTypes.string.isRequired,
        autor: PropTypes.string.isRequired,
        genero: PropTypes.string.isRequired,
        capa: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired
    }),
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
}

export default EditBookDialog