import { SvgIcon } from "@mui/material";

export const CostDriversIcon = () => {
    return (
        <SvgIcon viewBox="0 0 600 476.6" >
            <svg fill="none" viewBox="0 0 15 15" height="1em" width="1em" >
                <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M7.711.797a.5.5 0 00-.422 0l-6 2.8A.5.5 0 001 4.05v6.9a.5.5 0 00.289.453l6 2.8a.5.5 0 00.422 0l6-2.8A.5.5 0 0014 10.95v-6.9a.5.5 0 00-.289-.453l-6-2.8zM7.5 3.157L5.98 2.51 7.5 1.8l1.52.71-1.52.646zm.196 1.003l2.542-1.08 2.034.949L7.5 6.057 2.728 4.029l2.034-.95L7.304 4.16a.5.5 0 00.392 0zM8 6.93l5-2.124V7.93l-1.918.882a1 1 0 00-.582.908v2.078L8 12.965V6.93zm3.5 4.402l1.5-.7V9.03l-1.5.69v1.612zM7 6.93v6.034l-2.498-1.166V9.72a1 1 0 00-.582-.908L2 7.929V4.806L7 6.93zm-5 3.7l1.502.702V9.72L2 9.03v1.602z"
                    clipRule="evenodd"
                />
            </svg>
        </SvgIcon>
    )
}
export const BenchmarkPricingIcon = (props) => {
    return (
        <SvgIcon {...props} sx={{ fontSize: "18px" }} viewBox="0 0 24 24">
            <rect x="2" y="2" width="8" height="8" stroke="#04ABD7" strokeWidth="1.5" fill="none" />
            <rect x="14" y="2" width="8" height="8" stroke="#04ABD7" strokeWidth="1.5" fill="none" />
            <rect x="2" y="14" width="8" height="8" stroke="#04ABD7" strokeWidth="1.5" fill="none" />
            <rect x="14" y="14" width="8" height="8" stroke="#04ABD7" strokeWidth="1.5" fill="none" />
        </SvgIcon>
    );
}
export const DataCubeIcon = () => {
    return (
        <SvgIcon viewBox="0 0 600 476.6" >
            <svg
                viewBox="0 0 512 512"
                fill="currentColor"
                height="1em"
                width="1em"
            // {...props}
            >
                <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={32}
                    d="M448 341.37V170.61A32 32 0 00432.11 143l-152-88.46a47.94 47.94 0 00-48.24 0L79.89 143A32 32 0 0064 170.61v170.76A32 32 0 0079.89 369l152 88.46a48 48 0 0048.24 0l152-88.46A32 32 0 00448 341.37z"
                />
                <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={32}
                    d="M69 153.99l187 110 187-110M256 463.99v-200"
                />
            </svg>
        </SvgIcon>
    )
}

export const DataPredictionIcon = () => {
    return (
        <>
            <SvgIcon >
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                // {...props}
                >
                    <path d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.59 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4m6 14c0 .5-2.13 2-6 2s-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23V17m0-4.55c-1.3.95-3.58 1.55-6 1.55s-4.7-.6-6-1.55V9.64c1.47.83 3.61 1.36 6 1.36s4.53-.53 6-1.36v2.81M12 9C8.13 9 6 7.5 6 7s2.13-2 6-2 6 1.5 6 2-2.13 2-6 2z" />
                </svg>
            </SvgIcon>

            {/* <img src={DATASTORE} alt="Data Store"></img> */}
        </>
    )
}