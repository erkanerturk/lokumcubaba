import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { API_BASE } from '../config/env';
import SubmitForm from './SubmitForm';

import {
  isString,
  isNumber,
  isInRange,
  isEmpty,
  isPhoneNumber,
  isEmail,
} from '../helper/validate';

class FormPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        trade: [
          { key: true, text: 'Evet', value: 'yes' },
          { key: false, text: 'Hayır', value: 'no' },
        ],
        cities: [{ key: '1', text: 'Fetching', value: 'fetching' }],
        towns: [],
        districts: [],
      },
      formData: {
        fullName: '',
        identificationNumber: '',
        phone: '',
        email: '',
        address: '',
        amount: '',
        trade: '',
        city: '',
        town: '',
        district: '',
        info: '',
      },
      errors: {
        fullName: false,
        identificationNumber: false,
        phone: false,
        email: false,
        address: false,
        amount: false,
        trade: false,
        city: false,
        town: false,
        district: false,
      },
      errorMessages: [],
      errorAnimation: {
        animation: 'jiggle',
        duration: 500,
        visible: true,
      },
      isFetching: false,
      isSubmitting: false,
      isSuccess: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchCities();
  }

  fetchCreateForm(formData) {
    this.setState({ isSubmitting: true });

    fetch(API_BASE + '/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(responsive =>
        this.setState({ isSubmitting: false, isSuccess: true }),
      )
      .catch(error => console.log(error));
  }

  fetchCities() {
    this.setState({ isFetching: true });

    fetch(API_BASE + '/cities', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;',
      },
    })
      .then(response => response.json())
      .then(res =>
        res.map(city => {
          return {
            key: city.cityID,
            text: city.cityName,
            value: city.cityName,
          };
        }),
      )
      .then(data =>
        this.setState(state => {
          return {
            ...state,
            isFetching: false,
            options: {
              ...state.options,
              cities: data,
              towns: [],
              districts: [],
            },
          };
        }),
      )
      .catch(error => console.log(error));
  }

  fetchTowns(cityID) {
    this.setState({ isFetching: true });

    fetch(API_BASE + '/towns?cityID=' + cityID, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;',
      },
    })
      .then(response => response.json())
      .then(res =>
        res.map(town => {
          return {
            key: town.townID,
            text: town.townName,
            value: town.townName,
          };
        }),
      )
      .then(data =>
        this.setState(state => {
          return {
            ...state,
            isFetching: false,
            options: {
              ...state.options,
              towns: data,
              districts: [],
            },
          };
        }),
      )
      .catch(error => console.log(error));
  }

  fetchDistricts(townID) {
    this.setState({ isFetching: true });

    fetch(API_BASE + '/districts?townID=' + townID, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;',
      },
    })
      .then(response => response.json())
      .then(res =>
        res.map(district => {
          return {
            key: district.districtID,
            text: district.districtName,
            value: district.districtName,
          };
        }),
      )
      .then(data =>
        this.setState(state => {
          return {
            ...state,
            isFetching: false,
            options: {
              ...state.options,
              districts: data,
            },
          };
        }),
      )
      .catch(error => console.log(error));
  }

  validateForm = () => {
    const { formData } = this.state;
    // Hangi input alanında hata olduğunu tutar
    const errors = {};
    // Hata mesajlarını tutar
    let errorMessages = [];

    // Hata mesajları
    const translateMessage = {
      fullName: 'Ad soyad alanı boş olamaz',
      identificationNumber: 'T.C. kimlik numarası alanı boş olamaz',
      phone: 'Telefon numarası giriniz',
      email: 'E-Posta adresi giriniz',
      address: 'Adres belirtiniz',
      amount: 'Yatırım miktarı giriniz',
      trade: 'Perakende ticareti geçmişinizi belirtiniz',
      city: 'İl seçiniz',
      town: 'İlçe seçiniz',
      district: 'Semt seçiniz',
    };

    // Tüm form girişlerini kontrol eder boş değer varsa mesaj oluşturur
    Object.keys(formData).map(key => {
      const value = formData[key];
      if (isEmpty(value) && key !== 'info') {
        errors[key] = true;
        errorMessages.push(translateMessage[key]);
      }
    });

    // Formda boş alan yoksa koşula girer
    if (
      errorMessages[
        Object.keys(errorMessages)[Object.keys(errorMessages).length - 1]
      ] === undefined
    ) {
      if (!isString(formData.fullName)) {
        errorMessages.push('Ad Soyad alfabetik karakter olmalı');
        errors.fullName = true;
      }
      if (!isInRange(formData.fullName, 5, 30)) {
        errorMessages.push('Ad Soyad 5 ile 30 karakter arasında olmalı');
        errors.fullName = true;
      }
      if (!isNumber(formData.identificationNumber)) {
        errorMessages.push('T.C. kimlik numarası sayı olmalı');
        errors.identificationNumber = true;
      }
      if (!isInRange(formData.identificationNumber, 11, 11)) {
        errorMessages.push('T.C. kimlik numarası 11 karakter olmalı');
        errors.identificationNumber = true;
      }
      if (!isPhoneNumber(formData.phone)) {
        errorMessages.push('Telefon numarasını doğru giriniz');
        errors.phone = true;
      }
      if (!isEmail(formData.email)) {
        errorMessages.push('E-Posta adresini doğru giriniz');
        errors.email = true;
      }
      if (!isNumber(formData.amount)) {
        errorMessages.push('Yatırım miktarı sayı olmalı');
        errors.amount = true;
      }
    }

    return { errors, errorMessages };
  };

  handleChange(e, data) {
    // Select box ise koşula girer
    if (data.options !== undefined) {
      // Select box'ın değerleri içinde seçilen değerin key'ini alır
      const { key } = data.options.find(o => o.value === data.value);

      this.setState(state => {
        return {
          ...state,
          formData: {
            ...state.formData,
            [data.name]: key,
          },
        };
      });

      // Select box değiştiğinde ona bağımlı olan select box için fetch işlemi yapılır
      if (data.name === 'city') {
        this.fetchTowns(key);
      } else if (data.name === 'town') {
        this.fetchDistricts(key);
      }
    } else if (
      // Telefon numarası, kimlik numarası ve yatırım miktarı alanlarına sadece sayı girinebilir
      !['phone', 'identificationNumber', 'amount'].includes(e.target.name) ||
      isNumber(e.target.value) ||
      e.target.value == ''
    ) {
      // Event Pooling
      const targetName = e.target.name;
      const targetValue = e.target.value;
      this.setState(state => {
        return {
          ...state,
          formData: {
            ...state.formData,
            [targetName]: targetValue,
          },
        };
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { errors, errorMessages } = this.validateForm();

    // Callback olmalı
    this.setState(
      {
        errors,
        errorMessages,
      },
      () => {
        // İnput hatası varsa animasyon oynat yoksa post işlemi yap
        Object.values(errors)[0] !== undefined
          ? this.toggleAnimation()
          : this.fetchCreateForm(this.state.formData);
      },
    );
  }

  toggleAnimation = () =>
    this.setState(state => {
      return {
        ...state,
        errorAnimation: {
          ...state.errorAnimation,
          visible: !state.errorAnimation.visible,
        },
      };
    });

  render() {
    const { isSuccess } = this.state;

    return (
      <div>
        {isSuccess ? (
          <Redirect to="/success" />
        ) : (
          <SubmitForm
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        )}
      </div>
    );
  }
}

export default FormPage;
