package monitoring

func PublicNameFromDisplayString(str *string) *SystemPublicNameEnum {
	if str == nil {
		return nil
	}
	var val SystemPublicNameEnum
	switch *str {
	case "All":
		val = SYSTEMPUBLICNAMEENUM_ALL
	case "Residential System":
		val = SYSTEMPUBLICNAMEENUM_RESIDENTIAL
	case "Commercial":
		val = SYSTEMPUBLICNAMEENUM_COMMERCIAL
	default:
		val = SYSTEMPUBLICNAMEENUM_OTHER
	}
	return &val
}

func (v SystemPublicNameEnum) String() string {
	switch v {
	case SYSTEMPUBLICNAMEENUM_ALL:
		return "All"
	case SYSTEMPUBLICNAMEENUM_RESIDENTIAL:
		return "Residential System"
	case SYSTEMPUBLICNAMEENUM_COMMERCIAL:
		return "Commercial"
	default:
		return "Other"
	}
}
