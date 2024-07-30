"use client";
// import { SwimStyle } from "./meetDropdown/meetdropdown";

import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useRef, useState } from "react";

const EnterMeet = () => {
    const [openModal, setOpenModal] = useState(false);
    const swimmerInputRef = useRef(null);

    return (
        <>
            {/* <Button onClick={() => setOpenModal(true)}>Enter</Button>
            <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)} initialFocus={swimmerInputRef}>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign up for this Meet</h3>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="swimmer" value="Meet Entrant" />
                            </div>
                            <TextInput id="swimmer" ref={swimmerInputRef} placeholder="Swimmer Name" required />
                        </div>
                        <SwimStyle />
                      
                        <div className="w-full">
                            <Button>Enter</Button>
                        </div>
                        <div className="flex justify-end text-sm font-medium text-gray-500 dark:text-gray-300">

                            <a href="#" className="text-cyan-700 hover:underline dark:text-cyan-500">
                                Sign Up For Event
                            </a>
                        </div>
                    </div>
                </Modal.Body>
            </Modal> */}
        </>
    );
}
export default EnterMeet;