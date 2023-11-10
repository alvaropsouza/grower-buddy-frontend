import * as React from "react";
import { TermsButton } from "~/components/ui/Buttons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

export default function TermsOfServiceModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div onClick={onOpen} className="flex">
        <TermsButton />
      </div>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Terms of Service</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <small>
              <b>Last Updated:</b> November 5, 2023
              <p>
                <small>
                  These Terms of Service govern your use of the Grower Buddy
                  website // (the Service), which is provided by Grower Buddy.
                  By accessing or using the Service, // you agree to comply with
                  and be bound by these Terms. If you do not agree with these
                  Terms, // please do not use the Service.
                </small>
              </p>
            </small>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

//           {genModalParagraph({
//             text: ``,
//           })}
//           <small>
//             <b>1. Acceptance of Terms</b>
//           </small>

//           {genModalParagraph({
//             text: `By using the Service, you affirm that you are at least 18 years old, and you are legally
//             capable of entering into binding contracts. If you are using the Service on behalf of a business or organization,
//              you represent and warrant that you have the authority to bind that entity to these Terms.`,
//           })}
//           <small>
//             <b>2. Description of Service</b>
//           </small>

//           {genModalParagraph({
//             text: `Grower Buddy provides a platform for users to track and manage their marijuana growth, including but not
//             limited to monitoring data related to water pH, soil pH, light power, and setup used. Users can input, store, and
//             retrieve data relevant to their marijuana growth processes. The Service is for informational and tracking purposes
//             only and does not endorse or promote the cultivation, sale, or use of marijuana where it is illegal.`,
//           })}

//           <small>
//             <b>3. User Accounts</b>
//           </small>

//           {genModalParagraph({
//             text: `To access certain features of the Service, you may be required to create a user account. You are responsible
//             for maintaining the security and confidentiality of your account credentials. You are also responsible for any activity
//              that occurs under your account. Please notify us immediately of any unauthorized use of your account.`,
//           })}

//           <small>
//             <b>4. User Obligations</b>
//           </small>

//           {genModalParagraph({
//             text: `4.1. Comply with all applicable laws and regulations related to marijuana cultivation in your jurisdiction.
//             4.2. Use the Service for personal, non-commercial purposes only.
//             4.3. Provide accurate and up-to-date information.
//             4.4. Respect the intellectual property rights of Grower Buddy and other users of the Service.
//             4.5. Refrain from using the Service for any illegal, harmful, or malicious activities, including but not limited to,
//             distributing malware, spamming, or any unauthorized access or use of data.`,
//           })}

//           <small>
//             <b>6. Intellectual Property</b>
//           </small>

//           {genModalParagraph({
//             text: `Grower Buddy owns all rights, title, and interest in the Service and its content. You are not granted any intellectual
//             property rights in or to the Service, except for the limited right to use the Service in accordance with these Terms.`,
//           })}

//           <small>
//             <b>7. Termination</b>
//           </small>

//           {genModalParagraph({
//             text: `may, at its sole discretion, terminate or suspend your access to the Service for any reason, including violation of these Terms.
//             Upon termination, your right to use the Service will cease immediately.`,
//           })}

//           <small>
//             <b>8. Disclaimers</b>
//           </small>

//           {genModalParagraph({
//             text: `The information provided by the Service is for informational purposes only and should not be considered as professional advice.
//             Grower Buddy is not responsible for the success or failure of your marijuana growth efforts. You are responsible for understanding
//             and complying with local laws and regulations.`,
//           })}

//           <small>
//             <b>9. Limitation of Liability</b>
//           </small>

//           {genModalParagraph({
//             text: `In no event shall Grower Buddy be liable for any direct, indirect, special, incidental, consequential, or punitive damages
//             arising from the use of the Service.`,
//           })}

//           <small>
//             <b>10. Changes to Terms</b>
//           </small>

//           {genModalParagraph({
//             text: `GreenThumbGrower reserves the right to modify or revise these Terms at any time. Changes will be effective when posted on the
//             Service. Your continued use of the Service after such changes constitutes acceptance of the updated Terms.`,
//           })}

//           <small>
//             <b>11. Contact Information</b>
//           </small>

//           {genModalParagraph({
//             text: `If you have any questions or concerns regarding these Terms, please contact us at growerbuddy@gmail.com.
//             By using the Service, you acknowledge that you have read, understood, and agree to these Terms of Service.`,
//           })}
//         </DialogContent>
//         <DialogActions>
//           <Button
//             variant="outlined"
//             className="border-[#9DD189] text-[#26343b] hover:border-[#9DD189]"
//             onClick={handleClose}
//           >
//             Close
//           </Button>
//         </DialogActions>
//       </BootstrapDialog>
//     </>
//   );
// }
