// import facebookBlue from '@src/assets/facebook-blue.svg';
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    IconButton,
    InputAdornment,
    InputLabel,
    Link,
    MenuItem,
    Paper,
    Radio,
    RadioGroup,
    Select,
    TextField,
    Tooltip,
} from "@mui/material";
import facebookBlue from "@src/assets/facebook-blue.svg";
import styled from "styled-components";
import { Help, Visibility, VisibilityOff } from "@mui/icons-material";
import { useSnackbar } from "notistack";
import {NavLink} from "react-router";
import {useSignUpFormStore} from "./SignUpFormStore";
import {getAllDaysInMonth, getAllMonths, getAllYearsFrom1900ToCurrent, onChangeSignUpForm, signUpByDefault, validateSignUpForm} from "./SignUpHelpers";
import {_signUpByDefault} from "./signUpApis";
import {useLoginStore} from "../Login/LoginStore";
import {signUpConstants} from "./signUpConstants";
import {loginConstants} from "../Login/loginConstants";
import {sign} from "crypto";
import {useSignUpStore} from "./signUpStore";
import ErrorIcon from '@mui/icons-material/Error';


const TopPaper = styled("div")({});
const MiddlePaper = styled("div")({});
const BottomPaper = styled("div")({});
const Line = styled("div")({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
});




export const SignUpPage = () => {
    const [signUpForm, setSignUpForm] = useSignUpFormStore();
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const {user, setUser, showPassword, setShowPassword, setDisplayIntroduction} = useLoginStore();
    const {signUpErrors, setSignUpErrors, firstTimeInit, setFirstTimeInit} = useSignUpStore();

    const hasError = (signUpErrors?.firstName || signUpErrors?.lastName || signUpErrors?.emailOrPhone || signUpErrors?.dayMonthYear || signUpErrors?.newPassword || firstTimeInit) 

    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    backgroundColor: "#f0f0f0",
                    justifyItems: "center",
                    // border: '1px solid blue',
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        width: "100%",
                        height: "100%",
                        // alignItems: 'center',
                        // gap: '40px',
                    }}
                >
                    <div
                        style={{
                            // margin: "0 016 0",
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            // height: '100%',
                        }}
                    >
                        <img
                            src={facebookBlue}
                            alt="Logo"
                            style={{
                                objectFit: "contain",
                                width: "302px",
                                height: "100px",
                            }}
                        />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            width: "100%",
                            height: "100%",
                            // border: '1px solid blue',
                        }}
                    >
                        <Paper
                            elevation={3}
                            style={{
                                width: "432px",
                                height: "612px",
                                display: "flex",
                                flexDirection: "column",
                                // justifyContent: 'center',
                                // alignItems: 'center',
                                borderRadius: "8px",
                                marginTop: "15px",
                            }}
                        >
                            <TopPaper
                                style={{
                                    width: "100%",
                                    padding: "6px16",
                                }}
                            >
                                <p
                                    style={{
                                        fontSize: "25px",
                                        fontWeight: 700,
                                        margin: "0 0 -16px 0",
                                        color: "#222",
                                        textAlign: "center",
                                    }}
                                >
                                    Create a new account
                                </p>
                                <p
                                    style={{
                                        fontSize: "15px",
                                        color: "#00000080",
                                        marginBottom: "-10px",
                                        textAlign: "center",
                                        padding: "0 10px",
                                    }}
                                >
                                    Quick and easy
                                </p>
                            </TopPaper>
                            <div
                                style={{
                                    height: "1px",
                                    width: "100%",
                                    margin: "20px 0 0px 0",
                                    background: "#00000030",
                                }}
                            >
                                {" "}
                            </div>
                            <MiddlePaper
                                style={{
                                    padding: "16px 16px 0 16px",
                                    width: "100%",
                                }}
                            >
                                <Line>
                                    <TextField
                                        variant="outlined"
                                        label="First name"
                                        name="firstName"
                                        value={signUpForm?.firstName ?? ""}
                                        onChange={(e) => onChangeSignUpForm({
                                            signUpForm,
                                            setSignUpForm,
                                            fieldName: e.target.name,
                                            fieldValue: e.target.value,
                                            setFirstTimeInit
                                        })}
                                        fullWidth
                                        sx={{
                                            height: "40px",
                                            "& .MuiInputBase-root": {
                                                height: "40px",
                                            },
                                            "& label.MuiFormLabel-root[data-shrink='false']": {
                                                top: "-7px",
                                            },
                                        }}
                                        error={signUpErrors?.firstName}
                                        onBlur={(e) => validateSignUpForm({
                                            fieldName: e.target.name, 
                                            fieldValue: e.target.value, 
                                            setSignUpErrors, 
                                            signUpErrors,
                                            signUpForm
                                        })}
                                        slotProps={{
                                            input: {
                                                endAdornment: (<div style={{marginRight: '-14px'}}>
                                                    {signUpErrors?.firstName 
                                                        ? <ErrorIconn errorContent={signUpConstants.errorContent.firstName}/>
                                                        : <div style={{width:'34px', height:'34px'}}/>
                                                    }
                                                </div>
                                                ),
                                            }
                                        }}
                                    />
                                    <TextField
                                        variant="outlined"
                                        label="Last Name"
                                        name="lastName"
                                        value={signUpForm?.lastName ?? ""}
                                        onChange={(e) => onChangeSignUpForm({
                                            signUpForm,
                                            setSignUpForm,
                                            fieldName: e.target.name,
                                            fieldValue: e.target.value,
                                            setFirstTimeInit
                                        })}
                                        fullWidth
                                        sx={{
                                            height: "40px",
                                            "& .MuiInputBase-root": {
                                                height: "40px",
                                            },
                                            "& label.MuiFormLabel-root[data-shrink='false']": {
                                                top: "-7px",
                                            },
                                        }}
                                        error={signUpErrors?.lastName || false}
                                        onBlur={(e) => validateSignUpForm({
                                            fieldName: e.target.name, 
                                            fieldValue: e.target.value, 
                                            setSignUpErrors, 
                                            signUpErrors,
                                            signUpForm
                                        })}
                                        slotProps={{
                                            input: {
                                                endAdornment: (<div style={{marginRight: '-14px'}}>
                                                    {signUpErrors?.lastName 
                                                        ? <ErrorIconn errorContent={signUpConstants.errorContent.lastName}/>
                                                        : <div style={{width:'34px', height:'34px'}}/>
                                                    }
                                                </div>
                                                ),
                                            }
                                        }}
                                    />
                                </Line>
                                <div style={{ margin: "5px 0" }}>
                                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                        <div>
                                            <span
                                                style={{
                                                    fontSize: "12px",
                                                    color: "#00000080",
                                                    marginRight: "-4px",
                                                }}
                                            >
                                                Birthday
                                            </span>
                                            <IconButton>
                                                <Help
                                                    sx={{
                                                        color: "#00000080",
                                                        fontSize: "14px",
                                                        outline: "none !important",
                                                        border: "none !important",
                                                    }}
                                                />
                                            </IconButton>
                                        </div>
                                        {signUpErrors?.dayMonthYear 
                                            ? <ErrorIconn errorContent={signUpConstants.errorContent.dayMonthYear}/>
                                            : <div style={{width:'34px', height:'34px'}}/>
                                        }
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            gap: "10px",
                                        }}
                                    >
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Day</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                label="Day"
                                                name="day"
                                                value={signUpForm?.day ?? 1}
                                                onChange={(e) => onChangeSignUpForm({
                                                    signUpForm,
                                                    setSignUpForm,
                                                    fieldName: e.target.name,
                                                    fieldValue: e.target.value,
                                                    setFirstTimeInit
                                                })}
                                                sx={{
                                                    height: "40px",
                                                }}
                                                error={signUpErrors?.dayMonthYear}
                                                onBlur={(e) => validateSignUpForm({
                                                    fieldName: e.target.name, 
                                                    fieldValue: e.target.value, 
                                                    setSignUpErrors, 
                                                    signUpErrors,
                                                    signUpForm
                                                })}
                                            >
                                                {getAllDaysInMonth().map((day) => (
                                                    <MenuItem key={day.code} value={day.code}>
                                                        {day.desc}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Month</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                name="month"
                                                label="Month"
                                                value={signUpForm?.month ?? 1}
                                                onChange={(e) => onChangeSignUpForm({
                                                    signUpForm,
                                                    setSignUpForm,
                                                    fieldName: e.target.name,
                                                    fieldValue: e.target.value,
                                                    setFirstTimeInit
                                                })}
                                                sx={{
                                                    height: "40px",
                                                    "& legend": {
                                                        width: "48px",
                                                    },
                                                }}
                                                error={signUpErrors?.dayMonthYear}
                                                onBlur={(e) => validateSignUpForm({
                                                    fieldName: e.target.name, 
                                                    fieldValue: e.target.value, 
                                                    setSignUpErrors, 
                                                    signUpErrors,
                                                    signUpForm
                                                })}
                                            >
                                                {getAllMonths().map((month) => (
                                                    <MenuItem key={month.code} value={month.code}>
                                                        {month.desc}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Year</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                name="year"
                                                label="Year"
                                                value={signUpForm?.year ?? new Date().getFullYear()}
                                                onChange={(e) => onChangeSignUpForm({
                                                    signUpForm,
                                                    setSignUpForm,
                                                    fieldName: e.target.name,
                                                    fieldValue: e.target.value,
                                                    setFirstTimeInit
                                                })}
                                                sx={{
                                                    height: "40px",
                                                    "& legend": {
                                                        width: "36px",
                                                    },
                                                }}
                                                error={signUpErrors?.dayMonthYear}
                                            >
                                                {getAllYearsFrom1900ToCurrent().map((year) => (
                                                    <MenuItem key={year.code} value={year.desc}>
                                                        {year.desc}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                                <div style={{ margin: "5px 0" }}>
                                    <div>
                                        <span
                                            style={{
                                                fontSize: "12px",
                                                color: "#00000080",
                                                marginRight: "-4px",
                                            }}
                                        >
                                            Gender
                                        </span>
                                        <IconButton>
                                            <Help
                                                sx={{
                                                    color: "#00000080",
                                                    fontSize: "14px",
                                                }}
                                            />
                                        </IconButton>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            gap: "10px",
                                        }}
                                    >
                                        <FormControl
                                            sx={{
                                                width: "100%",
                                                marginBottom: "10px",
                                            }}
                                        >
                                            <RadioGroup
                                                value={signUpForm.gender ?? "01"}
                                                name="gender"
                                                onChange={(e) => onChangeSignUpForm({
                                                    signUpForm,
                                                    setSignUpForm,
                                                    fieldName: e.target.name,
                                                    fieldValue: e.target.value,
                                                    setFirstTimeInit
                                                })}
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    width: "100%",
                                                    gap: "10px",
                                                    "& label.MuiFormControlLabel-root": {
                                                        border: "1px solid #00000040",
                                                        borderRadius: "4px",
                                                        width: "calc((100% - 20px) / 3)",
                                                        margin: "0",
                                                    },
                                                    "& svg": {
                                                        fill: "#00000070",
                                                    },
                                                }}
                                            >
                                                <FormControlLabel value={signUpConstants.gender.female.code} defaultChecked control={<Radio size="small" />} label={signUpConstants.gender.female.desc} />
                                                <FormControlLabel value={signUpConstants.gender.male.code} control={<Radio size="small" />} label={signUpConstants.gender.male.desc} />
                                                <FormControlLabel value={signUpConstants.gender.other.code} control={<Radio size="small" />} label={signUpConstants.gender.other.desc} />

                                            </RadioGroup>
                                        </FormControl>
                                    </div>
                                    <TextField
                                        variant="outlined"
                                        label="Mobile number or email"
                                        name="emailOrPhone"
                                        value={signUpForm?.emailOrPhone ?? ""}
                                        onChange={(e) => onChangeSignUpForm({
                                            signUpForm,
                                            setSignUpForm,
                                            fieldName: e.target.name,
                                            fieldValue: e.target.value,
                                            setFirstTimeInit
                                        })}
                                        fullWidth
                                        sx={{
                                            height: "40px",
                                            marginBottom: "10px",
                                            "& .MuiInputBase-root": {
                                                height: "40px",
                                            },
                                            "& label.MuiFormLabel-root[data-shrink='false']": {
                                                top: "-7px",
                                            },
                                        }}
                                        error={signUpErrors?.emailOrPhone}
                                        onBlur={(e) => validateSignUpForm({
                                            fieldName: e.target.name, 
                                            fieldValue: e.target.value, 
                                            setSignUpErrors, 
                                            signUpErrors,
                                            signUpForm
                                        })}
                                        slotProps={{
                                            input: {
                                                endAdornment: (<div style={{marginRight: '-14px'}}>
                                                    {signUpErrors?.emailOrPhone 
                                                        ? <ErrorIconn errorContent={signUpConstants.errorContent.emailOrPhone}/>
                                                        : <div style={{width:'34px', height:'34px'}}/>
                                                    }
                                                </div>
                                                ),
                                            }
                                        }}
                                    />
                                    <TextField
                                        variant="outlined"
                                        label="New Password"
                                        name="newPassword"
                                        value={signUpForm?.newPassword ?? ""}
                                        type={showPassword ? "text" : "password"}
                                        onChange={(e) => onChangeSignUpForm({
                                            signUpForm,
                                            setSignUpForm,
                                            fieldName: e.target.name,
                                            fieldValue: e.target.value,
                                            setFirstTimeInit
                                        })}
                                        fullWidth
                                        slotProps={{
                                            input: {
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label={
                                                                showPassword ? 'hide the password' : 'display the password'
                                                            }
                                                            onClick={() => setShowPassword(!showPassword)}
                                                            edge="end"
                                                            sx={{
                                                                "&": {
                                                                    outline: "none !important", // Xoá viền focus
                                                                    border: "none !important", // Xoá viền focus
                                                                }
                                                            }}
                                                        >
                                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                        <div style={{marginRight: '-14px'}}>
                                                            {signUpErrors?.newPassword
                                                                ? <ErrorIconn errorContent={signUpConstants.errorContent.newPassword}/>
                                                                : <div style={{width:'34px', height:'34px', opacity: 0}}/>
                                                            }
                                                        </div>
                                                    </InputAdornment>
                                                    
                                                ),
                                            }
                                        }}
                                        sx={{
                                            height: "40px",
                                            "& .MuiInputBase-root": {
                                                height: "40px",
                                            },
                                            "& label.MuiFormLabel-root[data-shrink='false']": {
                                                top: "-7px",
                                            },
                                            marginBottom: '14px',
                                            // Thêm CSS để ẩn icon mặc định của trình duyệt
                                            "& input::-ms-reveal, & input::-ms-clear": {
                                                display: "none", // Ẩn icon trên Edge
                                            },
                                            "& input::-webkit-credential-autofill-button, & input::-webkit-textfield-decoration-container": {
                                                display: "none", // Ẩn icon trên Chrome
                                            },
                                            "& input[type='password']": {
                                                // Đảm bảo icon mặc định không hiển thị
                                                WebkitTextSecurity: showPassword ? "none" : "disc", // Điều chỉnh kiểu hiển thị mật khẩu
                                            },
                                        }}
                                        error={signUpErrors?.newPassword}
                                        onBlur={(e) => validateSignUpForm({
                                            fieldName: e.target.name, 
                                            fieldValue: e.target.value, 
                                            setSignUpErrors, 
                                            signUpErrors,
                                            signUpForm
                                        })}

                                    />
                                </div>
                            </MiddlePaper>

                            <BottomPaper style={{ padding: "0 16px 16px 16px" }}>
                                <p
                                    style={{
                                        fontSize: "11px",
                                        color: "#00000080",
                                        margin: "0 0 10px 0",
                                        lineHeight: '1.34',
                                    }}
                                >
                                    Users of our services may have uploaded your contact information to Facebook. Learn more.
                                </p>
                                <p
                                    style={{
                                        fontSize: "11px",
                                        color: "#00000080",
                                        margin: "0 0 10px 0",
                                        lineHeight: '1.34',
                                    }}
                                >
                                    By clicking Register, you agree to our Terms, Privacy Policy, and Cookie Policy. You can receive our notifications
                                    via SMS and unsubscribe at any time.
                                </p>
                                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                    <Button
                                        onClick={() => signUpByDefault({
                                            signUpForm,
                                            setSignUpForm,
                                            user,
                                            setUser,
                                            enqueueSnackbar,
                                        })}
                                        sx={{
                                            background: hasError ? loginConstants.grayStandard : loginConstants.greenStandard,
                                            color: loginConstants.whiteStandard,

                                            fontSize: "17px",
                                            textTransform: "none",
                                            // width: '100%',
                                            padding: "0px 56px",
                                            height: "36px",
                                            marginBottom: "16px",
                                            marginTop: "6px",

                                            "&:focus": {
                                                outline: "none !important", // Xoá viền focus
                                                border: "none !important", // Xoá viền focus
                                            },
                                        }}
                                        disabled={hasError}
                                    >
                                        Register
                                    </Button>
                                </div>
                                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                    <NavLink to='/login'  style={{ 
                                        textDecoration: "none", fontWeight: 'normal', textAlign:'center', fontSize: '17px',
                                        color: loginConstants.blueStandard,
                                        }}
                                        onClick={() => {
                                            setDisplayIntroduction(false);
                                        }}
                                    >Already have an account ?</NavLink>
                                </div>
                            </BottomPaper>
                        </Paper>
                    </div>
                </div>
            </div>
        </>
    );
};

type ErrorIconnProps = {
    errorContent: string;
}
const ErrorIconn = (props:ErrorIconnProps) => {
    const { errorContent } = props;
    return (
        <Tooltip title={errorContent} placement="top" arrow 
            slotProps={{
                tooltip: {
                sx: {
                    color: "white",
                    backgroundColor: "#BE4B49",
                },
                },
            }}
        >
            <IconButton sx={{
                "&": {
                    outline: "none !important",
                    border: "none !important",
                }
            }}>
                <ErrorIcon sx={{ color: "#e74c3c", fontSize: "18px" }} />
            </IconButton>
        </Tooltip>
    )
}