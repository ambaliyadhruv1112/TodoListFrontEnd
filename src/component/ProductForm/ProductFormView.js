import React from 'react';
import {
  Form,
  FormInput,
  FormItem,
  FormTextArea,
  FormRadioButtonGroup,
  FormLabel,
} from '../Form/Element';
import { Typography, Box, Button } from '@chemcycled/components';
import {
  ValidateChemicalName,
  ValidateCINNumber,
  ValidateSmell,
  ValidateSellerName,
  ValidateSellerAddress,
  ValidateEmailAddress,
} from '../../utils/formValidation';

const ProductFormView = ({ handleSubmit, control, errors }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Box d='flex' direction='column' p={2.5}>
        <Typography type='body' size='small' mb={2}>
          Product From
        </Typography>
        <FormItem>
          <FormLabel required='true'>Chemical Name</FormLabel>
          <FormInput
            placeholder='Chemical Name'
            name='chemicalName'
            type='text'
            control={control}
            rules={ValidateChemicalName}
            errors={errors}
          />
        </FormItem>
        <FormItem>
          <FormLabel required='true'>CAS Number</FormLabel>
          <FormInput
            placeholder='CAS Number'
            name='casNumber'
            type='number'
            control={control}
            rules={ValidateCINNumber}
            errors={errors}
          />
        </FormItem>
        <FormItem>
          <FormLabel required='true'>
            Does the product have bad smell?
          </FormLabel>
          <FormRadioButtonGroup
            name='haveBadSmell'
            selectedValue='true'
            options={[
              { label: 'Yes', value: 'YES' },
              { label: 'No', value: 'NO' },
            ]}
            control={control}
            rules={ValidateSmell}
            errors={errors}
          />
        </FormItem>
        <FormItem>
          <FormLabel required='true'>Seller Name</FormLabel>
          <FormInput
            placeholder='Seller Name'
            name='sellerName'
            type='text'
            control={control}
            rules={ValidateSellerName}
            errors={errors}
          />
        </FormItem>
        <FormItem>
          <FormLabel required='true'>Email Id</FormLabel>
          <FormInput
            placeholder='Email Id'
            name='sellerEmail'
            type='email'
            control={control}
            rules={ValidateEmailAddress}
            errors={errors}
          />
        </FormItem>
        <FormItem>
          <FormLabel required='true'>Seller Address</FormLabel>
          <FormTextArea
            type='text'
            placeholder='Seller Address'
            name='sellerAddress'
            control={control}
            rules={ValidateSellerAddress}
            errors={errors}
          />
        </FormItem>
        <Button
          text='Add'
          color='success'
          textColor='white'
          size='small'
          htmlType='submit'
        />
      </Box>
    </Form>
  );
};

export default ProductFormView;
