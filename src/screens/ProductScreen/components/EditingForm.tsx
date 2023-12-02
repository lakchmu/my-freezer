import React, { useCallback, useContext, useEffect, useState } from 'react';

import { Button, Cancel } from '../../../components';
import { Product } from '../../../types';
import { NotificationContext, NotificationStatus, ProductsContext } from '../../../store';

import { FormContent, FormValueProp, initFormValue, getFormData } from './Form';

const BASE_URL = process.env.BASE_URL;

interface EditingFormProp {
  id: number;
  onCancel: () => void;
  onSubmit: () => void;
}

export const EditingForm = ({ id, onCancel, ...props }: EditingFormProp) => {
  const { dispatch } = useContext(NotificationContext);
  const { edit, getById, getAll } = useContext(ProductsContext);

  const [loaded, setLoaded] = useState<boolean>(false);
  const [editing, setEditing] = useState<boolean>(false);
  const [formValue, setFormValue] = useState<FormValueProp>(initFormValue);

  const init = useCallback(() => {
    const product: Product | undefined = getById(id);
    console.log('Product to edit: ', JSON.stringify(product));

    if (product) {
      setFormValue({ ...formValue, ...product, limit: `${product.limit}`, uri: `${BASE_URL}/uploads/${product.uri}` });
    }

    setLoaded(true);
  }, [id, getById, formValue]);

  useEffect(() => {
    !loaded && init();
  }, [init, loaded]);

  const onSubmit = useCallback(async () => {
    try {
      setEditing(true);

      const body = getFormData(formValue);

      if (body) {
        await edit(id, body);
        await getAll();

        dispatch({
          show: true,
          text: 'The Product Was Edited',
          status: NotificationStatus.SUCCESS,
        });
      }

      props.onSubmit();
    } catch (error: any) {
      dispatch({ show: true, text: error.message, status: NotificationStatus.ERROR });
    } finally {
      setEditing(false);
    }
  }, [id, dispatch, edit, props, formValue]);

  const Controls = useCallback(
    () => (
      <>
        <Cancel mt="8" size="lg" onPress={onCancel} />
        <Button mt="8" size="lg" onPress={onSubmit} isLoading={editing} isLoadingText="Saving">
          Edit
        </Button>
      </>
    ),
    [editing, onCancel, onSubmit],
  );

  return <FormContent value={formValue} setValue={setFormValue} Controls={Controls} />;
};
