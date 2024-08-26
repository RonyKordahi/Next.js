import classes from "./main-header-background.module.css"

export default function MainHeaderBackground() {
    return (
        <div className={classes["header-background"]}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop
                            offset="0%"
                            style={{ stopColor: '#59453c', stopOpacity: '1' }}
                        />
                        <stop
                            offset="100%"
                            style={{ stopColor: '#8f3a09', stopOpacity: '1' }}
                        />
                    </linearGradient>
                </defs>
                <path
                    fill="url(#gradient)"
                    d="M0,192L48,180C96,168,192,144,288,136C384,128,480,136,576,140C672,144,768,144,864,136C960,128,1056,112,1152,100C1248,88,1344,80,1392,76L1440,72L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                ></path>
            </svg>
        </div>
    )
}