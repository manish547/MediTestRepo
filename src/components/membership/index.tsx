import React from 'react'
import Hero from '../common/Hero'
import HospitalImageSlider from '../common/HospitalImageSlider'
import MembershipService from './MembershipService';

const MemberShip = () => {
    const hospitaLogoImages = [
        { index: 0, image: "london-bridge-hospital" },
        { index: 1, image: "imperial-private-healthcare" },
        { index: 2, image: "portland-hospital" },
        { index: 3, image: "moorfields-private-eye-hospital" },
        { index: 4, image: "harley-street-clinic" },
        { index: 5, image: "london-clinic" },
    ];
    return (
        <div>
            <Hero
                image="membership-hero"
                title="MEMBERSHIP PLAN"
                description="Annual Health Checks are vital in identifying early signs of disease or other health issues, enabling early intervention and potentially improving the quality of your life."
                isNavigator={false}
                isDark={true}
                isPricing={false}
            />
            <div className="bg-[#E4EFE1] py-8 px-3 xs:px-0">
                <div className="mx-auto">
                    <HospitalImageSlider imageData={hospitaLogoImages} />
                </div>
            </div>
            <div>
                <MembershipService />
            </div>
        </div>
    )
}

export default MemberShip