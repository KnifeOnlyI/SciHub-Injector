/**
 * The interface to represent the configuration file (config/config.json)
 */
export interface ConfigurationInterface {
  /** The base Sci-Hub URL */
  scihubUrl: string;

  /** The Sci-Hub name */
  sciHubName: string,

  /** The Sci-Hub link title */
  sciHubLinkTitle: string,

  /** The Sci-Hub link visible text */
  sciHubLinkText: string,

  /** The Sci-Hub logo alt value */
  sciHubLogoAlt: string,

  /** The base64 image represents Sci-Hub logo */
  sciHubIcon: string;
}
