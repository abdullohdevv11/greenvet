
export interface PriceItem {
  name: string;
  price: string;
  isFrom?: boolean;
}

export const prices: Record<string, PriceItem[]> = {
  consultation: [
    { name: "price_consultation_exam", price: "75 000" },
    { name: "price_recheck", price: "30 000" },
    { name: "price_consultation_no_pet", price: "20 000" },
    { name: "price_house_call", price: "250 000" },
  ],
  vaccination: [
    { name: "price_vaccination", price: "30 000" },
  ],
  spaying_neutering: [
    { name: "price_castration_cat", price: "200 000", isFrom: true },
    { name: "price_spaying_cat_ovariectomy", price: "400 000", isFrom: true },
    { name: "price_spaying_cat_ovariohysterectomy", price: "600 000", isFrom: true },
    { name: "price_castration_dog", price: "700 000", isFrom: true },
    { name: "price_spaying_dog", price: "800 000", isFrom: true },
  ],
  general_checkup: [
    { name: "price_ultrasound", price: "100 000", isFrom: true },
    { name: "price_xray", price: "100 000" },
    { name: "price_blood_analysis", price: "450 000" },
    { name: "price_microscopy", price: "50 000", isFrom: true },
  ],
  treatment: [
    { name: "price_injection_im_sc", price: "10 000" },
    { name: "price_injection_iv", price: "15 000" },
    { name: "price_iv_drip", price: "20 000" },
    { name: "price_wound_treatment", price: "15 000", isFrom: true },
  ],
  surgery: [
    { name: "price_surgical_wound_treatment", price: "15 000", isFrom: true },
    { name: "price_abscess_opening", price: "50 000", isFrom: true },
    { name: "price_tumor_removal", price: "80 000", isFrom: true },
    { name: "price_dentistry", price: "70 000", isFrom: true },
  ],
  travel_documents: [
    { name: "price_passport", price: "60 000", isFrom: true },
    { name: "price_chipping", price: "150 000", isFrom: true },
  ],
  microchipping: [
    { name: "price_chipping", price: "150 000", isFrom: true },
  ],
  diagnostics: [
    { name: "price_ultrasound", price: "100 000", isFrom: true },
    { name: "price_xray", price: "100 000" },
    { name: "price_blood_analysis", price: "450 000" },
    { name: "price_express_tests", price: "100 000", isFrom: true },
  ]
};
