import * as yup from "yup";

export default yup.object().shape({
title: yup
    .string()
    .required("title is required")
    .min(3, "title must be 3 chars long"),
source: yup
    .string()
    .required("source is required")
    .min(3, "source must be 3 chars long"),
ingredients: yup
    .string()
    .required("ingredients is required")
    .min(3, "ingredients must be 3 chars long"),
instructions: yup
    .string()
    .required("instructions is required")
    .min(3, "instructions must be 3 chars long"),
    category: yup
    .string()
    .oneOf(["dinner", "chicken", "dessert", "pasta", "other"], "category is required"),
});


