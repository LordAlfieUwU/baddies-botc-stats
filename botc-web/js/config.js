/**
 * Centralized configuration for Blood on the Clocktower (BOTC) analytics.
 * Ported from botc_config.py
 */

// Scripts considered part of the normal rotation
// All other scripts are considered Teensyville (small-player scripts)
export const NORMAL_SCRIPTS = new Set([
    "trouble brewing",
    "bad moon rising",
    "sects & violets",
    "trouble writhing",
    "tough guessing",
    "pies baking"
]);

// List of commonly used game modes/scripts for dropdown menus
export const COMMON_SCRIPTS = [
    "Trouble Brewing",
    "Bad Moon Rising",
    "Sects & Violets",
    "Trouble Writhing",
    "Tough Guessing",
    "Pies Baking",
];

// Mapping of normalized character names to their role types
export const CHARACTER_ROLE_TYPES = {
    // Demon
    "al-hadikhia": "Demon",
    "fang_gu": "Demon",
    "imp": "Demon",
    "kazali": "Demon",
    "legion": "Demon",
    "leviathan": "Demon",
    "lil'_monsta": "Demon",
    "lleech": "Demon",
    "lord_of_typhon": "Demon",
    "no_dashii": "Demon",
    "ojo": "Demon",
    "po": "Demon",
    "pukka": "Demon",
    "riot": "Demon",
    "shabaloth": "Demon",
    "vigormortis": "Demon",
    "vortox": "Demon",
    "yaggababble": "Demon",
    "zombuul": "Demon",
    // Minions
    "assassin": "Minion",
    "baron": "Minion",
    "boffin": "Minion",
    "boomdandy": "Minion",
    "cerenovus": "Minion",
    "devil's_advocate": "Minion",
    "evil_twin": "Minion",
    "fearmonger": "Minion",
    "goblin": "Minion",
    "godfather": "Minion",
    "harpy": "Minion",
    "marionette": "Minion",
    "mastermind": "Minion",
    "mezepheles": "Minion",
    "organ_grinder": "Minion",
    "pit-hag": "Minion",
    "poisoner": "Minion",
    "psychopath": "Minion",
    "scarlet_woman": "Minion",
    "spy": "Minion",
    "summoner": "Minion",
    "vizier": "Minion",
    "widow": "Minion",
    "witch": "Minion",
    "wizard": "Minion",
    "wraith": "Minion",
    "xaan": "Minion",
    // Outsider
    "barber": "Outsider",
    "butler": "Outsider",
    "damsel": "Outsider",
    "drunk": "Outsider",
    "golem": "Outsider",
    "goon": "Outsider",
    "hatter": "Outsider",
    "heretic": "Outsider",
    "hermit": "Outsider",
    "klutz": "Outsider",
    "lunatic": "Outsider",
    "moonchild": "Outsider",
    "mutant": "Outsider",
    "ogre": "Outsider",
    "plague_doctor": "Outsider",
    "politician": "Outsider",
    "puzzlemaster": "Outsider",
    "recluse": "Outsider",
    "saint": "Outsider",
    "snitch": "Outsider",
    "sweetheart": "Outsider",
    "tinker": "Outsider",
    "zealot": "Outsider",
    // Townsfolk
    "acrobat": "Townsfolk",
    "alchemist": "Townsfolk",
    "alsaahir": "Townsfolk",
    "amnesiac": "Townsfolk",
    "artist": "Townsfolk",
    "atheist": "Townsfolk",
    "balloonist": "Townsfolk",
    "banshee": "Townsfolk",
    "bounty_hunter": "Townsfolk",
    "cannibal": "Townsfolk",
    "chambermaid": "Townsfolk",
    "chef": "Townsfolk",
    "choirboy": "Townsfolk",
    "clockmaker": "Townsfolk",
    "courtier": "Townsfolk",
    "cult_leader": "Townsfolk",
    "dreamer": "Townsfolk",
    "empath": "Townsfolk",
    "engineer": "Townsfolk",
    "exorcist": "Townsfolk",
    "farmer": "Townsfolk",
    "fisherman": "Townsfolk",
    "flowergirl": "Townsfolk",
    "fool": "Townsfolk",
    "fortune_teller": "Townsfolk",
    "gambler": "Townsfolk",
    "general": "Townsfolk",
    "gossip": "Townsfolk",
    "grandmother": "Townsfolk",
    "high_priestess": "Townsfolk",
    "huntsman": "Townsfolk",
    "innkeeper": "Townsfolk",
    "investigator": "Townsfolk",
    "juggler": "Townsfolk",
    "king": "Townsfolk",
    "knight": "Townsfolk",
    "librarian": "Townsfolk",
    "lycanthrope": "Townsfolk",
    "magician": "Townsfolk",
    "mathematician": "Townsfolk",
    "mayor": "Townsfolk",
    "minstrel": "Townsfolk",
    "monk": "Townsfolk",
    "nightwatchman": "Townsfolk",
    "noble": "Townsfolk",
    "oracle": "Townsfolk",
    "pacifist": "Townsfolk",
    "philosopher": "Townsfolk",
    "pixie": "Townsfolk",
    "poppy_grower": "Townsfolk",
    "preacher": "Townsfolk",
    "princess": "Townsfolk",
    "professor": "Townsfolk",
    "ravenkeeper": "Townsfolk",
    "sage": "Townsfolk",
    "sailor": "Townsfolk",
    "savant": "Townsfolk",
    "seamstress": "Townsfolk",
    "shugenja": "Townsfolk",
    "slayer": "Townsfolk",
    "snake_charmer": "Townsfolk",
    "soldier": "Townsfolk",
    "steward": "Townsfolk",
    "tea_lady": "Townsfolk",
    "town_crier": "Townsfolk",
    "undertaker": "Townsfolk",
    "village_idiot": "Townsfolk",
    "virgin": "Townsfolk",
    "washerwoman": "Townsfolk",
    // Traveller
    "apprentice": "Traveller",
    "barista": "Traveller",
    "beggar": "Traveller",
    "bishop": "Traveller",
    "bone_collector": "Traveller",
    "bureaucrat": "Traveller",
    "butcher": "Traveller",
    "cacklejack": "Traveller",
    "deviant": "Traveller",
    "gangster": "Traveller",
    "gnome": "Traveller",
    "gunslinger": "Traveller",
    "harlot": "Traveller",
    "judge": "Traveller",
    "matron": "Traveller",
    "scapegoat": "Traveller",
    "thief": "Traveller",
    "voudon": "Traveller",
};

// Fabled characters (game-level modifiers, not player roles)
export const FABLED = [
    "Angel",
    "Buddhist",
    "Deus_Ex_Fiasco",
    "Djinn",
    "Doomsayer",
    "Duchess",
    "Ferryman",
    "Fiddler",
    "Fibbin",
    "Hell's_Librarian",
    "Revolutionary",
    "Sentinel",
    "Spirit_Of_Ivory",
    "Toymaker",
];

// Loric characters (game-level modifiers, not player roles)
export const LORICS = [
    "Big_Wig",
    "Bootlegger",
    "Gardener",
    "God_Of_Ug",
    "Hindu",
    "Knaves",
    "Pope",
    "Storm_Catcher",
    "Tor",
    "Ventriloquist",
    "Zenomancer",
];

/**
 * Return a lowercase stripped version of a script name for comparison.
 */
export function normalizeScriptName(name) {
    return (name || "").trim().toLowerCase();
}

/**
 * Categorize a script as 'Normal' or 'Teensyville'.
 */
export function categorizeScript(name) {
    return NORMAL_SCRIPTS.has(normalizeScriptName(name)) ? "Normal" : "Teensyville";
}

/**
 * Normalize a character name for consistent lookups.
 * Converts spaces to underscores, handles apostrophes and hyphens,
 * and makes it lowercase for case-insensitive matching.
 */
export function normalizeCharacterName(name) {
    if (!name) return "";
    return name.replace(/ /g, "_").toLowerCase().trim();
}

/**
 * Get the role type for a character.
 * Returns: "Townsfolk", "Outsiders", "Minions", "Demons", or "Traveller"
 */
export function getCharacterRoleType(characterName) {
    const normalized = normalizeCharacterName(characterName);

    // Try exact match first
    if (CHARACTER_ROLE_TYPES[normalized]) {
        return CHARACTER_ROLE_TYPES[normalized];
    }

    // Try with hyphen replaced by underscore
    if (normalized.includes("-")) {
        const altNormalized = normalized.replace(/-/g, "_");
        if (CHARACTER_ROLE_TYPES[altNormalized]) {
            return CHARACTER_ROLE_TYPES[altNormalized];
        }
    }

    // Try with underscore replaced by hyphen
    if (normalized.includes("_")) {
        const altNormalized = normalized.replace(/_/g, "-");
        if (CHARACTER_ROLE_TYPES[altNormalized]) {
            return CHARACTER_ROLE_TYPES[altNormalized];
        }
    }

    return "Unknown";
}
