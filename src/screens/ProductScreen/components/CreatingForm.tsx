import React, { useCallback, useContext, useState } from 'react';

import { Button } from '../../../components';
import { NotificationContext, NotificationStatus, ProductsContext } from '../../../store';

import { FormContent, FormValueProp, initFormValue, getFormData } from './Form';

interface CreatingFormProp {}

export const CreatingForm = ({}: CreatingFormProp) => {
  const { dispatch } = useContext(NotificationContext);
  const { create } = useContext(ProductsContext);

  const [formValue, setFormValue] = useState<FormValueProp>(initFormValue);

  const onSubmit = useCallback(async () => {
    try {
      const body = getFormData(formValue);

      console.log('Payload data: ', body);

      if (body) {
        await create(body);

        dispatch({ show: true, text: 'The Product Was Added', status: NotificationStatus.SUCCESS });

        clean();
      }
    } catch (error: any) {
      dispatch({ show: true, text: error.message, status: NotificationStatus.ERROR });
    }
  }, [dispatch, create, formValue]);

  const clean = () => {
    setFormValue(initFormValue);
  };

  const Controls = useCallback(
    () => (
      <Button mt="8" size="lg" onPress={onSubmit}>
        Create
      </Button>
    ),
    [onSubmit],
  );

  return <FormContent value={formValue} setValue={setFormValue} Controls={Controls} />;
};
