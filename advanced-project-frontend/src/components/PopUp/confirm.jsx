import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

export default function ConfirmationDialog(props) {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const handleConfirm = async () => {
    try {
      await props.onConfirm();
      handleClose();
    } catch (error) {
      console.log(error.response.data.message);
      props.onError(error.response.data.message);
    }
  };

  return (
    <>
      <Button variant="contained"  color={props.color}
                  size="meduim"
                  className={props.className}onClick={handleOpen}>
        {props.buttonText}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{props.title}</DialogTitle>
        <DialogContent>{props.children}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{props.cancelText}</Button>
          <Button onClick={handleConfirm}>{props.confirmText}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
