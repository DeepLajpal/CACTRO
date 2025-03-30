import style from "./UpdateCard.module.css"
import { FaArrowRight } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const UpdateCard = () => {

    return (
        <div className={style["container"]}>
            <div className={style["left"]}>
                <p>
                    Slack is your digital HQ. Meet the new features keeping teams connected in a work-from-anywhere world.<span> <a href="#" className={style["link"]}>Let's go</a></span>
                </p>
                <div>

                    <FaArrowRight />
                </div>
            </div>
            <div className={style["right"]}>
                <RxCross1 />
            </div>

        </div>
    )
}

export default UpdateCard