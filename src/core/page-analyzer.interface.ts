/**
 * Represent the base interface for all page analyzer
 */
export interface PageAnalyzerInterface {
  /**
   * Get the DOI of the current resource
   *
   * @param customData The custom data to use (optional)
   *
   * @return the DOI of the current resource (undefined if not found)
   */
  getDOI(customData?: any): string | undefined;

  /**
   * Get the target HTML
   *
   * @param customData The custom data to use (optional)
   *
   * @return The founded target HTML (undefined if not found)
   */
  getTargetHTML(customData?: any): HTMLElement | undefined;
}
