import type { UtcOffset } from "../types.ts";
import TimeZones from "./time-zones.ts";

interface Metadata {
	readonly utcOffset: UtcOffset;
}

function generateMetadata(utcOffset: UtcOffset) {
	return Object.freeze<Metadata>({ utcOffset });
}

export const TimeZonesMeta: { [timeZone in TimeZones]: Readonly<Metadata> } = {
	[TimeZones.ACDT]: generateMetadata("UTC+10:30"),
	[TimeZones.ACST]: generateMetadata("UTC+9:30"),
	[TimeZones.ACT]: generateMetadata("UTC-5"),
	[TimeZones.ACWST]: generateMetadata("UTC+8:45"),
	[TimeZones.ADT]: generateMetadata("UTC-3"),
	[TimeZones.AEDT]: generateMetadata("UTC+11"),
	[TimeZones.AEST]: generateMetadata("UTC+10"),
	[TimeZones.AFT]: generateMetadata("UTC+4:30"),
	[TimeZones.AKDT]: generateMetadata("UTC-8"),
	[TimeZones.AKST]: generateMetadata("UTC-9"),
	[TimeZones.AMST]: generateMetadata("UTC-3"),
	[TimeZones.AMT]: generateMetadata("UTC-4"),
	[TimeZones.ARMT]: generateMetadata("UTC+4"),
	[TimeZones.ARST]: generateMetadata("UTC+3"),
	[TimeZones.ART]: generateMetadata("UTC-3"),
	[TimeZones.AST]: generateMetadata("UTC-4"),
	[TimeZones.AT]: generateMetadata("UTC-4"),
	[TimeZones.AWST]: generateMetadata("UTC+8"),
	[TimeZones.AZOST]: generateMetadata("UTC+0"),
	[TimeZones.AZOT]: generateMetadata("UTC-1"),
	[TimeZones.AZT]: generateMetadata("UTC+4"),
	[TimeZones.BAST]: generateMetadata("UTC+6"),
	[TimeZones.BDT]: generateMetadata("UTC+8"),
	[TimeZones.BIT]: generateMetadata("UTC-12"),
	[TimeZones.BNT]: generateMetadata("UTC+8"),
	[TimeZones.BOST]: generateMetadata("UTC+11"),
	[TimeZones.BOT]: generateMetadata("UTC-4"),
	[TimeZones.BRST]: generateMetadata("UTC-2"),
	[TimeZones.BRT]: generateMetadata("UTC-3"),
	[TimeZones.BST]: generateMetadata("UTC+1"),
	[TimeZones.BTT]: generateMetadata("UTC+6"),
	[TimeZones.CAT]: generateMetadata("UTC+2"),
	[TimeZones.CCT]: generateMetadata("UTC+6:30"),
	[TimeZones.CDT]: generateMetadata("UTC-5"),
	[TimeZones.CEST]: generateMetadata("UTC+2"),
	[TimeZones.CET]: generateMetadata("UTC+1"),
	[TimeZones.CHADT]: generateMetadata("UTC+13:45"),
	[TimeZones.CHAST]: generateMetadata("UTC+12:45"),
	[TimeZones.CHIST]: generateMetadata("UTC+8"),
	[TimeZones.CHOST]: generateMetadata("UTC+9"),
	[TimeZones.CHOT]: generateMetadata("UTC+8"),
	[TimeZones.CHST]: generateMetadata("UTC+10"),
	[TimeZones.CHUT]: generateMetadata("UTC+10"),
	[TimeZones.CIST]: generateMetadata("UTC-8"),
	[TimeZones.CIT]: generateMetadata("UTC+8"),
	[TimeZones.CKT]: generateMetadata("UTC-10"),
	[TimeZones.CLST]: generateMetadata("UTC-3"),
	[TimeZones.CLT]: generateMetadata("UTC-4"),
	[TimeZones.COST]: generateMetadata("UTC-4"),
	[TimeZones.COT]: generateMetadata("UTC-5"),
	[TimeZones.CST]: generateMetadata("UTC-6"),
	[TimeZones.CT]: generateMetadata("UTC-6"),
	[TimeZones.CUDT]: generateMetadata("UTC-4"),
	[TimeZones.CUST]: generateMetadata("UTC-5"),
	[TimeZones.CVT]: generateMetadata("UTC-1"),
	[TimeZones.CWST]: generateMetadata("UTC+8:45"),
	[TimeZones.CXT]: generateMetadata("UTC+7"),
	[TimeZones.DAVT]: generateMetadata("UTC+7"),
	[TimeZones.DDUT]: generateMetadata("UTC+10"),
	[TimeZones.EASST]: generateMetadata("UTC-5"),
	[TimeZones.EAST]: generateMetadata("UTC-6"),
	[TimeZones.EAT]: generateMetadata("UTC+3"),
	[TimeZones.ECT]: generateMetadata("UTC-5"),
	[TimeZones.EDT]: generateMetadata("UTC-4"),
	[TimeZones.EEST]: generateMetadata("UTC+3"),
	[TimeZones.EET]: generateMetadata("UTC+2"),
	[TimeZones.EGST]: generateMetadata("UTC+0"),
	[TimeZones.EGT]: generateMetadata("UTC-1"),
	[TimeZones.EIT]: generateMetadata("UTC+9"),
	[TimeZones.EST]: generateMetadata("UTC-5"),
	[TimeZones.ET]: generateMetadata("UTC-5"),
	[TimeZones.FET]: generateMetadata("UTC+3"),
	[TimeZones.FJT]: generateMetadata("UTC+12"),
	[TimeZones.FKST]: generateMetadata("UTC-3"),
	[TimeZones.FKT]: generateMetadata("UTC-4"),
	[TimeZones.FNT]: generateMetadata("UTC-2"),
	[TimeZones.GALT]: generateMetadata("UTC-6"),
	[TimeZones.GAMT]: generateMetadata("UTC-9"),
	[TimeZones.GEST]: generateMetadata("UTC-2"),
	[TimeZones.GET]: generateMetadata("UTC+4"),
	[TimeZones.GFT]: generateMetadata("UTC-3"),
	[TimeZones.GILT]: generateMetadata("UTC+12"),
	[TimeZones.GIT]: generateMetadata("UTC-9"),
	[TimeZones.GMT]: generateMetadata("UTC+0"),
	[TimeZones.GST]: generateMetadata("UTC+4"),
	[TimeZones.GYT]: generateMetadata("UTC-4"),
	[TimeZones.HADT]: generateMetadata("UTC-9"),
	[TimeZones.HAST]: generateMetadata("UTC-10"),
	[TimeZones.HKT]: generateMetadata("UTC+8"),
	[TimeZones.HMT]: generateMetadata("UTC+5"),
	[TimeZones.HOVST]: generateMetadata("UTC+8"),
	[TimeZones.HOVT]: generateMetadata("UTC+7"),
	[TimeZones.ICT]: generateMetadata("UTC+7"),
	[TimeZones.IDT]: generateMetadata("UTC+3"),
	[TimeZones.INST]: generateMetadata("UTC+5:30"),
	[TimeZones.IOT]: generateMetadata("UTC+6"),
	[TimeZones.IRDT]: generateMetadata("UTC+4:30"),
	[TimeZones.IRKT]: generateMetadata("UTC+8"),
	[TimeZones.IRST]: generateMetadata("UTC+3:30"),
	[TimeZones.ISRST]: generateMetadata("UTC+2"),
	[TimeZones.IST]: generateMetadata("UTC+1"),
	[TimeZones.JST]: generateMetadata("UTC+9"),
	[TimeZones.KGT]: generateMetadata("UTC+6"),
	[TimeZones.KOST]: generateMetadata("UTC+11"),
	[TimeZones.KRAT]: generateMetadata("UTC+7"),
	[TimeZones.KST]: generateMetadata("UTC+9"),
	[TimeZones.LHDT]: generateMetadata("UTC+11"),
	[TimeZones.LHST]: generateMetadata("UTC+10:30"),
	[TimeZones.LINT]: generateMetadata("UTC+14"),
	[TimeZones.MAGT]: generateMetadata("UTC+11"),
	[TimeZones.MART]: generateMetadata("UTC-9:30"),
	[TimeZones.MAWT]: generateMetadata("UTC+5"),
	[TimeZones.MDT]: generateMetadata("UTC-6"),
	[TimeZones.MHT]: generateMetadata("UTC+12"),
	[TimeZones.MIST]: generateMetadata("UTC+11"),
	[TimeZones.MMT]: generateMetadata("UTC+6:30"),
	[TimeZones.MSK]: generateMetadata("UTC+3"),
	[TimeZones.MST]: generateMetadata("UTC-7"),
	[TimeZones.MT]: generateMetadata("UTC-7"),
	[TimeZones.MUT]: generateMetadata("UTC+4"),
	[TimeZones.MVT]: generateMetadata("UTC+5"),
	[TimeZones.MYST]: generateMetadata("UTC+8"),
	[TimeZones.MYT]: generateMetadata("UTC+8"),
	[TimeZones.NCT]: generateMetadata("UTC+11"),
	[TimeZones.NDT]: generateMetadata("UTC-2:30"),
	[TimeZones.NFT]: generateMetadata("UTC+11"),
	[TimeZones.NPT]: generateMetadata("UTC+5:45"),
	[TimeZones.NRT]: generateMetadata("UTC+12"),
	[TimeZones.NST]: generateMetadata("UTC-3:30"),
	[TimeZones.NT]: generateMetadata("UTC-3:30"),
	[TimeZones.NUT]: generateMetadata("UTC-11"),
	[TimeZones.NZDT]: generateMetadata("UTC+13"),
	[TimeZones.NZST]: generateMetadata("UTC+12"),
	[TimeZones.OMST]: generateMetadata("UTC+6"),
	[TimeZones.ORAT]: generateMetadata("UTC+5"),
	[TimeZones.PDT]: generateMetadata("UTC-7"),
	[TimeZones.PET]: generateMetadata("UTC-5"),
	[TimeZones.PETT]: generateMetadata("UTC+12"),
	[TimeZones.PGT]: generateMetadata("UTC+10"),
	[TimeZones.PHOT]: generateMetadata("UTC+13"),
	[TimeZones.PhST]: generateMetadata("UTC+8"),
	[TimeZones.PHT]: generateMetadata("UTC+8"),
	[TimeZones.PKT]: generateMetadata("UTC+5"),
	[TimeZones.PMDT]: generateMetadata("UTC-2"),
	[TimeZones.PMST]: generateMetadata("UTC-3"),
	[TimeZones.PONT]: generateMetadata("UTC+11"),
	[TimeZones.PST]: generateMetadata("UTC-8"),
	[TimeZones.PT]: generateMetadata("UTC-8"),
	[TimeZones.PWT]: generateMetadata("UTC+9"),
	[TimeZones.PYST]: generateMetadata("UTC-3"),
	[TimeZones.PYT]: generateMetadata("UTC-4"),
	[TimeZones.RET]: generateMetadata("UTC+4"),
	[TimeZones.ROTT]: generateMetadata("UTC-3"),
	[TimeZones.SAKT]: generateMetadata("UTC+11"),
	[TimeZones.SAMT]: generateMetadata("UTC+4"),
	[TimeZones.SAST]: generateMetadata("UTC+2"),
	[TimeZones.SBT]: generateMetadata("UTC+11"),
	[TimeZones.SCT]: generateMetadata("UTC+4"),
	[TimeZones.SGT]: generateMetadata("UTC+8"),
	[TimeZones.SLST]: generateMetadata("UTC+5:30"),
	[TimeZones.SRET]: generateMetadata("UTC+11"),
	[TimeZones.SRT]: generateMetadata("UTC-3"),
	[TimeZones.SST]: generateMetadata("UTC-11"),
	[TimeZones.SYOT]: generateMetadata("UTC+3"),
	[TimeZones.TAHT]: generateMetadata("UTC-10"),
	[TimeZones.TFT]: generateMetadata("UTC+5"),
	[TimeZones.THA]: generateMetadata("UTC+7"),
	[TimeZones.TJT]: generateMetadata("UTC+5"),
	[TimeZones.TKT]: generateMetadata("UTC+13"),
	[TimeZones.TLT]: generateMetadata("UTC+9"),
	[TimeZones.TMT]: generateMetadata("UTC+5"),
	[TimeZones.TOT]: generateMetadata("UTC+13"),
	[TimeZones.TRT]: generateMetadata("UTC+3"),
	[TimeZones.TVT]: generateMetadata("UTC+12"),
	[TimeZones.ULAST]: generateMetadata("UTC+9"),
	[TimeZones.ULAT]: generateMetadata("UTC+8"),
	[TimeZones.USZ1]: generateMetadata("UTC+2"),
	[TimeZones.UTC]: generateMetadata("UTC+0"),
	[TimeZones.UYST]: generateMetadata("UTC-2"),
	[TimeZones.UYT]: generateMetadata("UTC-3"),
	[TimeZones.UZT]: generateMetadata("UTC+5"),
	[TimeZones.VET]: generateMetadata("UTC-4"),
	[TimeZones.VLAT]: generateMetadata("UTC+10"),
	[TimeZones.VOLT]: generateMetadata("UTC+4"),
	[TimeZones.VOST]: generateMetadata("UTC+6"),
	[TimeZones.VUT]: generateMetadata("UTC+11"),
	[TimeZones.WAKT]: generateMetadata("UTC+12"),
	[TimeZones.WAST]: generateMetadata("UTC+2"),
	[TimeZones.WAT]: generateMetadata("UTC+1"),
	[TimeZones.WEST]: generateMetadata("UTC+1"),
	[TimeZones.WET]: generateMetadata("UTC+0"),
	[TimeZones.WFT]: generateMetadata("UTC+12"),
	[TimeZones.WGST]: generateMetadata("UTC-2"),
	[TimeZones.WGT]: generateMetadata("UTC-3"),
	[TimeZones.WIB]: generateMetadata("UTC+7"),
	[TimeZones.WST]: generateMetadata("UTC+8"),
	[TimeZones.YAKT]: generateMetadata("UTC+9"),
	[TimeZones.YEKT]: generateMetadata("UTC+5"),
};

export default TimeZonesMeta;
