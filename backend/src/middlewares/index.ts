import validateRequestBody from "./validateRequestBody";
import verifyCreateUserFields from "./verifyCreateUserFields";
import verifyEditUserFields from "./verifyEditUserFields";
import verifyIfAddressIsRegistered from "./verifyIfAddressIsRegistered";
import verifyIfCategoryExists from "./verifyIfCategoryExists";
import verifyIfClientExists from "./verifyIfClientExists";
import verifyIfCpfExists from "./verifyIfCpfExists";
import verifyIfEmailExists from "./verifyIfEmailExists";
import verifyIfProductExists from "./verifyIfProductExists";
import verifyLoginEmail from "./verifyLoginEmail";
import verifyLoginPassword from "./verifyLoginPassword";
import verifyLoginUserFields from "./verifyLoginUserFields";
import verifyProductDeletion from "./verifyProductDeletion";
import verifyProductFields from "./verifyProductFields";
import verifyProductStockQuantity from "./verifyProductStockQuantity";
import verifyToken from "./verifyToken";



export {
     verifyCreateUserFields,
     verifyIfEmailExists,
     verifyLoginEmail,
     verifyLoginPassword,
     verifyLoginUserFields,
     verifyToken,
     verifyIfCategoryExists,
     verifyProductFields,
     verifyEditUserFields,
     verifyIfProductExists,
     validateRequestBody,
     verifyIfCpfExists,
     verifyIfAddressIsRegistered,
     verifyIfClientExists,
     verifyProductStockQuantity,
     verifyProductDeletion
};