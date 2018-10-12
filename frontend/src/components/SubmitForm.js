import React from 'react';
import { Button, Form, Message, Transition } from 'semantic-ui-react';

const SubmitForm = props => {
  const {
    options,
    formData,
    errors,
    errorMessages,
    errorAnimation,
    isFetching,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = props;

  return (
    <Transition
      animation={errorAnimation.animation}
      duration={errorAnimation.duration}
      visible={errorAnimation.visible}
    >
      <Form
        error={
          errorMessages[
            Object.keys(errorMessages)[Object.keys(errorMessages).length - 1]
          ] !== undefined
        }
        loading={isSubmitting}
      >
        <Message error header="Bir şeyler yanlış gitti" list={errorMessages} />
        <Form.Group widths={2}>
          <Form.Input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            label="Ad Soyad"
            placeholder="Erkan Ertürk"
            required
            error={errors.fullName}
          />
          <Form.Input
            type="text"
            name="identificationNumber"
            value={formData.identificationNumber}
            onChange={handleChange}
            label="T.C. Kimlik Numarası"
            placeholder="11111111111"
            required
            error={errors.identificationNumber}
          />
        </Form.Group>
        <Form.Group widths={2}>
          <Form.Input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            label="Telefon"
            placeholder="5542775975"
            required
            error={errors.phone}
          />
          <Form.Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            label="E-Posta"
            placeholder="erkanerturk@pm.me"
            required
            error={errors.email}
          />
        </Form.Group>
        <Form.TextArea
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          label="Adres"
          placeholder="Dünya"
          required
          error={errors.address}
        />
        <Form.Group widths={2}>
          <Form.Input
            type="text"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            label="Yatırım miktarı nedir ?"
            placeholder="999"
            required
            error={errors.amount}
          />
          <Form.Select
            name="trade"
            options={options.trade}
            onChange={handleChange}
            label="Perakende ticareti ile uğraştınız mı ?"
            error={errors.trade}
          />
        </Form.Group>
        <Form.Group widths={3}>
          <Form.Select
            name="city"
            onChange={handleChange}
            options={options.cities}
            placeholder="İl"
            error={errors.city}
            loading={isFetching}
            disabled={isFetching}
          />
          <Form.Select
            name="town"
            onChange={handleChange}
            options={options.towns}
            placeholder="İlçe"
            error={errors.town}
            loading={isFetching}
            disabled={isFetching}
          />
          <Form.Select
            name="district"
            onChange={handleChange}
            options={options.districts}
            placeholder="Semt"
            error={errors.district}
            loading={isFetching}
            disabled={isFetching}
          />
        </Form.Group>
        <Form.TextArea
          type="text"
          name="info"
          value={formData.info}
          onChange={handleChange}
          placeholder="Ek Bilgi"
        />
        <Button positive type="submit" onClick={handleSubmit}>
          Yolla gitsin
        </Button>
      </Form>
    </Transition>
  );
};

export default SubmitForm;
